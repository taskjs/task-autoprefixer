var Execution = require('execution');
var Record = require('record');

module.exports = Execution.extend({
    // The type of option could be HTML5 input types: file, directory, number, range, select,
    // url, email, tel, color, date, time, month, time, week, datetime(datetime-local),
    // string(text), boolean(checkbox), array, regexp, function and object.
    options: {
        browsers: {
            label: 'Browsers',
            default: ['> 1%', 'last 2 versions'],
            type: 'array'
        },
        cascade: {
            label: 'Visual cascade',
            default: false,
            type: 'boolean'
        }
    },
    run: function (inputs, options, logger, settings) {
        return this._run(inputs, options, logger, settings);
    },
    execute: function (resolve, reject) {
        var options = this.options;
        var inputs = this.inputs;
        var logger = this.logger;

        var autoprefixer = require('autoprefixer');
        var prefixer = autoprefixer(options.browsers, options);
        var outputs = inputs.map(function(record){
            var input = record.contents.toString();
            // Autoprefixer return result include css and map.
            var output = prefixer.process(input).css;
            logger.log('Autoprefixed', record.path);

            return new Record({
                path: record.path,
                contents: output
            });
        })

        resolve(outputs);
    }
})
