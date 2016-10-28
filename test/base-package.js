import path from "path";
import pack from "../index";
import createBabelHelpers from "../src/create-babel-helpers";

pack(path.join(__dirname, "base"));
createBabelHelpers(path.join(__dirname, "base-output", "babel-helpers.js"));