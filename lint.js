var LintRoller = require("lintroller");

var config = {
    stdoutErrors     : true,
    verbose          : false,
    stopOnFirstError : false,

    filepaths  : [
        //recursively include JS files in these folders
        "js/",
        "test/unit/"
    ],
    //but ignore anything in these folders
    exclusions : [
    ],

    linters : [
        {
            type : "jsLint",

            options : {

                nomen       : false,    // names checked for initial or trailing underbars
                plusplus    : false,    // ++ -- not allowed
                sloppy      : false,    // "use strict" required
                vars        : false,    // only one var statement per function
                white       : false,    // function () {} (space between function and first bracket)
                stupid      : false,    // no stupidity allowed
                node        : true,     // Node.js globals predefined
                browser     : true,     // console.log, document etc

                //JSLint defines global vars via the "predef" option
                predef : [
                    "define",
                    "require",
                    "$",
                    "requirejs",
                    "QUnit",
                    "test",
                    "asyncTest",
                    "start",
                    "equal",
                    "strictEqual",
                    "requirejs",
                    "ok",
                    "deepEqual",
                    "document"
                ]
            }
        },
        {
            type : "jsHint",

            options : {

                devel   : true,
                node    : true,

                //JSHint defines global vars via the "globals" option
                globals : {
                    "define"        : true,
                    "require"       : true,
                    "$"             : true,
                    "requirejs"     : true,
                    "QUnit"         : true,
                    "test"          : true,
                    "asyncTest"     : true,
                    "start"         : true,
                    "equal"         : true,
                    "strictEqual"   : true,
                    "ok"            : true,
                    "deepEqual"     : true,
                    "document"      : true
                }
            }
        }
    ]
};

LintRoller.init(config);