// react-native@0.21/Libraries/vendor/core/setImmediate.js
loader.define("react-native@0.21", "Libraries/vendor/core/setImmediate.js", "1n", function(require, global, __project, __filename, __dirname, __base, __pixel_ratio){
	"use strict";
	
	return [
		// Libraries/vendor/core/setImmediate.js
		function(__inner_require__, exports, module){
			module.exports = global.setImmediate || __inner_require__(1 /*Libraries/vendor/core/immediate/setImmediate.js*/).setImmediate;
		},
		// Libraries/vendor/core/immediate/setImmediate.js
		function(__inner_require__, exports, module){
			/**
			 * @generated SignedSource<<57d0446bbd1186485d372efe6b323dca>>
			 *
			 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			 * !! This file is a check-in of a static_upstream project!      !!
			 * !!                                                            !!
			 * !! You should not modify this file directly. Instead:         !!
			 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
			 * !!    the latest version from upstream.                       !!
			 * !! 2) Make your changes, test them, etc.                      !!
			 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
			 * !!    static_upstream.                                        !!
			 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			 *
			 * Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, and Domenic
			 * Denicola
			 *
			 * Permission is hereby granted, free of charge, to any person obtaining
			 * a copy of this software and associated documentation files (the
			 * "Software"), to deal in the Software without restriction, including
			 * without limitation the rights to use, copy, modify, merge, publish,
			 * distribute, sublicense, and/or sell copies of the Software, and to
			 * permit persons to whom the Software is furnished to do so, subject to
			 * the following conditions:
			 *
			 * The above copyright notice and this permission notice shall be
			 * included in all copies or substantial portions of the Software.
			 *
			 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
			 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
			 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
			 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
			 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
			 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
			 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
			 *
			 * @preserve-header
			 * @providesModule ImmediateImplementation
			 */
			
			(function (global, undefined) {
			
			    var nextHandle = 1;
			    var tasksByHandle = {};
			    var queueHead = {};
			    var queueTail = queueHead;
			    var currentlyRunningATask = false;
			    var doc = global.document;
			    var setImmediate;
			
			    function addFromSetImmediateArguments(args) {
			        var handler = args[0];
			        args = Array.prototype.slice.call(args, 1);
			        tasksByHandle[nextHandle] = function () {
			            handler.apply(undefined, args);
			        };
			        queueTail = queueTail.next = { handle: nextHandle++ };
			        return queueTail.handle;
			    }
			
			    function flushQueue() {
			        var next, task;
			        while (!currentlyRunningATask && (next = queueHead.next)) {
			            queueHead = next;
			            if (task = tasksByHandle[next.handle]) {
			                currentlyRunningATask = true;
			                try {
			                    task();
			                    currentlyRunningATask = false;
			                } finally {
			                    clearImmediate(next.handle);
			                    if (currentlyRunningATask) {
			                        currentlyRunningATask = false;
			
			                        if (queueHead.next) {
			                            setImmediate(flushQueue);
			                        }
			                    }
			                }
			            }
			        }
			    }
			
			    function clearImmediate(handle) {
			        delete tasksByHandle[handle];
			    }
			
			    function canUsePostMessage() {
			
			        if (global.postMessage && !global.importScripts) {
			            var postMessageIsAsynchronous = true;
			
			            var onMessage = function onMessage() {
			                postMessageIsAsynchronous = false;
			                if (global.removeEventListener) {
			                    global.removeEventListener("message", onMessage, false);
			                } else {
			                    global.detachEvent("onmessage", onMessage);
			                }
			            };
			
			            if (global.addEventListener) {
			                global.addEventListener("message", onMessage, false);
			            } else if (global.attachEvent) {
			                global.attachEvent("onmessage", onMessage);
			            } else {
			                return false;
			            }
			
			            global.postMessage("", "*");
			            return postMessageIsAsynchronous;
			        }
			    }
			
			    function installPostMessageImplementation() {
			
			        var messagePrefix = "setImmediate$" + Math.random() + "$";
			        var onGlobalMessage = function onGlobalMessage(event) {
			            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
			                flushQueue();
			            }
			        };
			
			        if (global.addEventListener) {
			            global.addEventListener("message", onGlobalMessage, false);
			        } else {
			            global.attachEvent("onmessage", onGlobalMessage);
			        }
			
			        setImmediate = function setImmediate() {
			            var handle = addFromSetImmediateArguments(arguments);
			            global.postMessage(messagePrefix + handle, "*");
			            return handle;
			        };
			    }
			
			    function installMessageChannelImplementation() {
			        var channel = new MessageChannel();
			        channel.port1.onmessage = flushQueue;
			        setImmediate = function setImmediate() {
			            var handle = addFromSetImmediateArguments(arguments);
			            channel.port2.postMessage(handle);
			            return handle;
			        };
			    }
			
			    function installReadyStateChangeImplementation() {
			        var html = doc.documentElement;
			        setImmediate = function setImmediate() {
			            var handle = addFromSetImmediateArguments(arguments);
			
			            var script = doc.createElement("script");
			            script.onreadystatechange = function () {
			                script.onreadystatechange = null;
			                html.removeChild(script);
			                script = null;
			                flushQueue();
			            };
			            html.appendChild(script);
			            return handle;
			        };
			    }
			
			    function installSetTimeoutImplementation() {
			        setImmediate = function setImmediate() {
			            setTimeout(flushQueue, 0);
			            return addFromSetImmediateArguments(arguments);
			        };
			    }
			
			    if (canUsePostMessage()) {
			
			        installPostMessageImplementation();
			    } else if (global.MessageChannel) {
			
			        installMessageChannelImplementation();
			    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
			
			        installReadyStateChangeImplementation();
			    } else {
			
			        installSetTimeoutImplementation();
			    }
			
			    exports.setImmediate = setImmediate;
			    exports.clearImmediate = clearImmediate;
			})(Function("return this")());
		}
	];
});