define([
    'automizy/core',
    'automizy/addons/jqueryAddOns',
    'automizy/functions/initBasicFunctions',
    'automizy/functions/registerLocalEvents',
    'automizy/images/icons'
], function () {
    var Button = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<span class="automizy-button"></span>'),
            $widgetButton: $('<a href="javascript:;"></a>'),
            text: 'My Button',
            skin: 'simple-white',
            float: 'none',
            width: '',
            hasObject: false,
            newRow: false,
            disabled: false,
            triggers:{
                click:0
            },
            create: function () {
            },
            id: 'automizy-button-' + $A.getUniqueString()
        };
        t.f = {};
        t.init();

        t.d.$widgetButton.appendTo(t.d.$widget);
        t.d.$widgetButton.text(t.d.text);
        t.d.$widget.addClass('automizy-skin-' + t.d.skin).attr('id', t.id());
        t.d.$widgetButton.click(function () {
            if (t.click().returnValue() === false) {
                return false;
            }
        });
        if (typeof obj !== 'undefined') {
            if (typeof obj.disabled !== 'undefined') {
                t.disabled(obj.disabled);
            }
            if (typeof obj.text !== 'undefined') {
                t.text(obj.text);
            }
            if (typeof obj.html !== 'undefined') {
                t.html(obj.html);
            }
            if (typeof obj.float !== 'undefined') {
                t.float(obj.float);
            }
            if (typeof obj.width !== 'undefined') {
                t.width(obj.width);
            }
            if (typeof obj.click !== 'undefined') {
                t.click(obj.click);
            }
            if (typeof obj.newRow !== 'undefined') {
                t.newRow(obj.newRow);
            }
            if (typeof obj.thin !== 'undefined') {
                t.thin(obj.thin);
            }
            t.initParameter(obj);
        }
    };

    var p = Button.prototype;
    p.text = p.val = p.value = function (text) {
        var t = this;
        if (typeof text !== 'undefined') {
            t.d.text = text;
            t.d.$widgetButton.text(text);
            return t;
        }
        return t.d.text;
    };
    p.html = function (html) {
        var t = this;
        if (typeof html !== 'undefined') {
            t.d.html = html;
            t.d.$widgetButton.html(html);
            return t;
        }
        return t.d.html;
    };
    p.width = function (width) {
        var t = this;
        if (typeof width !== 'undefined') {
            t.d.width = width;
            t.d.$widget.width(width);
            t.d.$widgetButton.width('100%');
            t.d.$widgetButton.css('width', '100%');
            return t;
        }
        return t.d.width;
    };
    p.disabled = function (disabled) {
        var t = this;
        if (typeof disabled !== 'undefined') {
            t.d.disabled = $A.parseBoolean(disabled);
            t.d.$widgetButton.prop('disabled', t.d.disabled);
            t.d.$widget.toggleClass('disabled', t.d.disabled);
            return t;
        }
        return t.d.disabled;
    };
    p.disable = function () {
        return this.disabled(true);
    };
    p.enable = function () {
        return this.disabled(false);
    };
    p.float = function (float) {
        var t = this;
        if (typeof float !== 'undefined') {
            t.d.float = float;
            t.d.$widget.css('float', float);
            return t;
        }
        return t.d.float;
    };
    p.newRow = function (newRow) {
        var t = this;
        if (typeof newRow !== 'undefined') {
            newRow = $A.parseBoolean(newRow);
            t.d.newRow = newRow;
            if (newRow) {
                t.d.$widget.addClass('new-row');
            } else {
                t.d.$widget.removeClass('new-row');
            }
            return t;
        }
        return t.d.newRow;
    };
    p.button = function () {
        var t = this;
        return t.d.$widgetButton;
    };

    p.click = function (func, name, life) {
        var t = this;
        if (typeof func === 'function') {
            t.addFunction('click', func, name, life);
        } else {
            if(t.disabled()){
                return t;
            }
            var a = t.runFunctions('click');
            t.returnValue(!(a[0] === false || a[1] === false));
        }
        return t;
    };
    p.thin = function(value){
        var t = this;
        if (typeof value !== 'undefined') {
            value = $A.parseBoolean(value);
            if(!value){
                t.widget().removeClass('automizy-button-thin');
                return t;
            }
        }
        t.widget().addClass('automizy-button-thin');
        return t;
    };


    $A.initBasicFunctions(Button, "Button", ['click']);


});
