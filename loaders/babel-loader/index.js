const babel = require("babel-core");

export default function(content) {
    var opts = {
        compact: false,
        env: "production",
        presets: [
            ['es2015', { "loose": true, "modules": false }], 'stage-0'
        ],
        plugins: [
            [require("babel-plugin-transform-es2015-modules-commonjs"), {
                "allowTopLevelThis": true
            }],
            require("babel-plugin-external-helpers"),
            require("babel-plugin-transform-react-jsx"),
            require("babel-plugin-transform-decorators-legacy").default
        ]
    }
    if (process.env.SM) {
        opts.sourceFileName = this.file;
        opts.sourceMaps = 'inline';
    }
    return babel.transform(content, opts).code;
};
