(function(){
    window.AutomizyJs = window.$A = new function () {
        var t = this;
        t.d = {
            version: '0.5.3',
            settings: {
                logTranslateMissings:true
            },
            uniques:[],
            defines: {},
            dialogs: {},
            buttons: {},
            inputs: {},
            forms:{},
            validators:{},
            feedbacks: {},
            hashes:[]
        };
        t.m = {};
        t.mt = {};
        t.default = {};
    }();
    
    return AutomizyJs;
})();

(function(){
    var u = function(t){
        return 'data:image/png;base64,'+t;
    };
    $A.images = {
        pageStepFirst:u('iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJDSURBVHjadNMxT9tAFAfw/53PLuasCiEkVLaCRGQImZBYGHHgG7QfgClbWTpW6kQXmGBh6tilHwCHMiRCIAWJCDsnMnWhC6pVybGRc4lfh2IaUvqkG+7u/U7vTu9ARHhu3N3dvW40Grf9fp+N711cXLQvLy+/EREYEWE84jh2fN+Ph8MhTNOE53lSSpkCQBAER0qpbQBYWFg45c/her0eDwYDMMYAAIyxfBw/rGsxinu9nnNychJrrcE5h+M4+dbWlgEAYRgejOJyubzvuu7OYwVJkkzW6/VYaw3G2BPc6XQOOp1ObRwDAC+w7/uJ1hoA4DgObWxsCABQSu2FYVgDACLC8vLyYYEBQERRNNdsNm8LPDMz01tfX38phKCHsmsAYBgGXNfdH8UAwFut1vcsy8AYA2MMq6urr0zTpCiK5pRStTzPAQBTU1PpOAYAvra2NmvbNorE8/Pzn1mWGdPT0z/K5fIu53+eKYqiyevr68/jBzAiwv39veX7fpZlGYgIUkp4nmdYlpV3u9337XZ7twClUulLpVJ5+1gBANi23a9Wq5ZlWeCcI0kS+L4/HAwGbHFx8VOlUvlQgJubmzdBEBw9OQAAJiYmtOd5tmma4JwjTVMcHx/nWmtWKpU+rqys7BIRGGNQSm2HYXjweIXReOiHRGuNPM8hhMDm5qaUUqZKqb0gCN4VufPz881/WllKmVar1RdCCDDGIMTfZnVdd2dpaemwmBuG8Qv/+41RFM2enZ11n9trtVqNq6urr0SE3wMAAuVa1KqERzkAAAAASUVORK5CYII='),
        pageStepBack:u('iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAE6SURBVHjafNIxSwMxFAfw/0tuVIS2dBCnTheuwWs7OTjc5ORncHFys4vrjU7tZJdufgXnKwg6FQuFXAOduiiUI+CgLkKfiym1XM32f/zyeOGFmBm7zng8fhFCfHU6ndNgFzLGDBeLRZuIQEQjUYbyPL+z1l4CwGq1AhF9izI0m82uiAgAoLXut1qtM9qc0SOfm81mXynVBYB1R2ttzyNmRhRFA48AINjuJKWEUqq/iQCAnHOHWZa9+kKtVvtIkmR/e3ZRqVTetNa3vuCc2zPGDLfh+jHz+fxmOp2uL4RheK+1vvBZpmkKAKhWq89BEPByuUyYGc65Y2Y+qtfrD3/g73yPQoiDoihOAKAoirbHVLZra23PGHPtc6PReCpdoVKqG0XRAACICFLKd/rv90wmk5EQ4jOO4/OfAQBCLov0TPxm+gAAAABJRU5ErkJggg=='),
        pageStepNext:u('iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFQSURBVHjadNE7awJBEAfw/9xdINgIcl4TSSu3CxaG61JKqoBlunwA7fIFcuQDJJUWYpMuVZpAwCIHIa0c4mPFR21xPrBJuTep7tCoA1vM8NsZmAEzo9frvXe73R9mxqlnVqvVzmw2u91sNpdE5OTz+U8cCUNrnQUAIsJoNKoppRrHoNlqtdrMXFitVmUiQhRFnmma57Ztf+1B3/fhOM4HMxeWy2UZAKIourYsi23b/k4gMXP6q9/vv00mk7skL5VKj8Vi8ekAAsBgMHidTqf3WmsYhgEp5Yvrug8HEACCIPhdr9cZAGBmVCqVC+s/Go/Hz9vtNpNsQgjRzOVyiz2olGoMh8MaEQEAhBBNIUQdAIzdTkqpFEkpUwQAVtJJKVWL4zgdt4sAgMIw7Mzn85ukIIRoSinrBydk5rMkcV23fQylewzDMNBaZz3Pu8KJ+BsAZWypwkMxZMwAAAAASUVORK5CYII='),
        pageStepLast:u('iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJBSURBVHjadJOxThtBEIb/Xe7wnQ8rlsukShHp7AMaHgAJ7KvyDKmSBpqkSngDKjpoQpMufRqMbZqTKMAIrMOsdKYFyUhYSGefs177JkW0ljHJSFuMZr9/fmlmQERotVo/m81mQESYf6enp9Hj4+Prf9WICMbV1dWvTqfzHgBs294vlUrbADAYDLKNRmMgpUS3273zfd/OZrO/MRd8MpnkddJut7eEEHs6H4/HICIopVCv14f9fn9pXoAREa6vr78LIT4SEQBgdXV113XdHaUUq9VqaZIkSNMUlmWhXC4/c8IBYHl5+VOxWDxkjIFzjjAMv0VR9NU0TfJ9n9u2Dc45pJSo1+vD4XC4+ExgVkS7aLVau51O57NhGFSpVBYsywIASClRq9WkFmEa0BGG4Y8oij6kaQoAWFlZ2XVdd0dKuRAEQdLr9RY558hkMlhfX3/1QgAATk5OBr1eL5umKTjn2NjYeFMoFO7jOF6qVquxZvL5/IjPw+12e//p6SlLRGCMwXXdw0KhcK+UYufn510NZzIZrK2tvTXm4Zubmy0Na/tKKdZoNMZxHHMAME0Tm5ubjuM4ydSBEGJPCLEFAIwxeJ534LruDgBomIhgmiYqlYrjOE4ynYIQYi8Mwy/aXqlUOtAbeXR0NJntPAsDgHF5eVm9vb31GWNT2PO87SRJrOPj46FS6u9Hw0C5XM7Nws/2AACKxeKh53nbAEBE05qGc7lc/8XIiAjNZjM4Ozu7mL+00WjEgiC4e3h4ePe/a/wzACBzbtGgtaC5AAAAAElFTkSuQmCC'),
        settingsIcon:u('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFmSURBVHjajNNNS5VREAfw3328GBqBbYR2LQOLMFxIQUn0gqCBECVFme36AHE/g21cGNgicOOFQNxIKEWLQBSjKIpA+gBCiwpCoYsv2WYOHB7uAw0Mz/xn5j9nnjlnao1GQ4VcQTPsd7jRLqnI7DruZ74+9IaeiThcxIWcBEcxg0mMYxMPs+In8RJf8Qj7GMFqKjARZBgOLcv10CRzOJfabWLV/8s+HmM7FfiNz6WkddzBVTxBK4vtxoGHdVzCKdzNEtbiFhLpDT5hHh3oxlPMFjGcZzieFZgqnQgv8CXDt7FcVPzj9wr/jxKuFfiArVLgWhtyD05neA/vC1zG2RhakgZGM9yL5zgR+CBmNlTHIX7iI85HwjEsYQO/0J+R0y28TbcgurjXpu3Bill0xct9kIZ4BJ1ZQquC2CrtTi0VWMEYvuFmLM/rUsu3wr+ExdiZP/Us6RUGsBN4OrCYz0LYY/H9C/8GALRlSDMw0h2ZAAAAAElFTkSuQmCC'),
        searchIcon:u('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAATRJREFUeNqU0j8oRWEYx/GDO1yL5M/AQGQ0ECKjweBfJisZDNY7HDJcZgu7RSJlUK7BLGVAMigZbwaFRZKB+D71O3V68t7DU59O5/Y+v/Pe932q4jiOAtWGRYyhE++4xjb2kkXVgeYJXMLS23GHF4xiF4eoDwUM4gANKKAL/ejGAE4wrZ3U5FyzvW8gjxkFJfWlXU3iGFO2xu+gD0MoueZ0fWpnFrjgA3r0PIoq1y3ubb0PyOv5GmXXG2p9QFnP3ozmOl1t2Qec4RGzaK4QMI9GOysf8IQLtGAfrb802+2say42/TUWNXlWI5q8HVxpcMblA3P2F3KueTX1XtKVFtxHTrGE82RwIjUWU4vW9FsThtGhU7/Rbr7Tk7ccaLZ6zpoJO8SVQPOfygK28KCgfzVb/QgwAM3kP0m2MqMIAAAAAElFTkSuQmCC'),
        exportIcon:u('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT5JREFUeNqM080rRFEYx/EzzKBYyILhP6C8pyg2s7CZZuUlSqRsxe4u8QfYWsjCRkrZTanZTVZWhqRkR8yGlJG88z31nDpOD92nPp37cs7vnnvPuYkoiuqNMU1Gr0+8ooA7jKPid0jKzR7UKQG3mECX9N3BGN79gF5U4UwJuMEjXtCAHLYw5wfYwSUMKgGtGEaNd20WD1g2MlirWqzjFHtBgK0lrLgZhJXANqbM/7WKZ20GuRiDXXVqAYsxB+9jIQxow5Ac26XKY8NfNqkDTOMtDGiH3VjHGJHXWcOH16cos2zWVqED5xjFkVxr9D72CeaxiW4t4B4zsm1dVWQjXSOLSWTw5C/jt7S73rGrMgZkR5blO/36F9xMUvj6Y3NdSJsKbyTliX3y7nGqRdpqF3CIfqRjBtgVucSVPfkRYACsvD1a/WEjxQAAAABJRU5ErkJggg=='),
        helpIcon:u('iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHySURBVHjahJRNSFRRFMd/b3gLF8UEUVT0ta6IqUUmWItsnEqGh0VfIElFCYHlB0RimUzQRJg1RQuLDGkhESLj9PKjdGFBuQh1U5ts08qCAjGIFue0uU+G63v2h7O45/z4v3fvOfc6qoqtB6N1CaAK2AHEgTlgGvDrK7o+2rxTbHJ/9PwmoAM4AjiEKw80X6x4NLPIJPfmXAIoAOv5v2YB79L+xxMLJvden90AfADWFYGTQDfwzRjXALuL6j+AsobkkxkXQFVylsE0sLex8ul8kLg7croL8IFKk1oFPAQOOHeGTm0HpqwzONaU6nnROVzbAtQBvU2pnpbO4dpy4K21tVKnY6jmGpCxCmeAL+aMgu6sADYDXy02GxOVnaKCFd2iMi4qcbPONKeeqagkQ9htrqrEl+iCAo2XD/bmbg+eTAA3Q5hlrojMLWEydqXqee6Wf3wtMAisDGF+u6oyBXgRJn+zL48eNtO7JoL55IpKHrgeASSBEjP+UcrHWtN9k4r4ihAS2dZ03z5FTkTUxxR5HzPDVq8q31UFK7bcGPA2qsqukNovVblwNd2vC3cnk0+XAgPAaut3/5gtFesnUN3mFcYBYkG2zStMqEq5qvjWF0us9Yiq7AkMFj0Fgdr7D5WZjmwFlgPzwGfAb69+9c7m/w0A36Atg3n1+QkAAAAASUVORK5CYII='),
        helpArrow:u('iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAC3SURBVHjanNRNCoMwEIbht5KFAbt00UN4CumpxVN4CIWsY10lXVVIY37GWQYeBiYz38N7T6nMOv0/+QZ5DUoppHAA5rbVIjgAc9c9e63rYYCAMjTrFKEiTKEszKEkLKFLWIMiWIsCKEEnlCKA5g76ddyAzTknWtqmf70NMO67Xay1oo7cwedUpTj4RwmONqcWX+5qDU5eRwln7zGHiwmQwrWZE2FJygVYmqsGGI/jw50kN845vgMAISKSwdQyAJUAAAAASUVORK5CYII=')
    };
})();

(function(){
    $.fn.removeAttributes = function () {
        return this.each(function () {
            var attributes = $.map(this.attributes, function (item) {
                return item.name;
            });
            var img = $(this);
            $.each(attributes, function (i, item) {
                img.removeAttr(item);
            });
        });
    }
    $.fn.getAttributes = function () {
        var obj = {};
        $.each(this[0].attributes, function () {
            if (this.specified) {
                obj[this.name] = this.value;
            }
        });
        return obj;
    }
    $.fn.removeClassPrefix = function (prefix) {
        this.each(function (i, el) {
            var classes = el.className.split(" ").filter(function (c) {
                return c.lastIndexOf(prefix, 0) !== 0;
            });
            el.className = $.trim(classes.join(" "));
        });
        return this;
    };
    $.fn.ashow = function () {
        this.removeClass('automizy-hide');
        return this;
    };
    $.fn.ahide = function () {
        this.addClass('automizy-hide');
        return this;
    };
    $.fn.serializeObject = function(addUnchecked){
        var result = {};
        var addUnchecked = addUnchecked || false;
        var extend = function (i, e) {
            var n = result[e.name];
            if (typeof n !== 'undefined' && n !== null) {
                if ($.isArray(n)) {
                    n.push(e.value);
                } else {
                    result[e.name] = [n, e.value];
                }
            } else {
                result[e.name] = e.value;
            }
        };

        values = this.serializeArray();
        if(addUnchecked){
            values = values.concat(
                this.find('input[type=checkbox]:not(:checked)').map(
                    function() {
                        return {name:this.name, value:"off"}
                    }).get()
            );
        }

        $.each(values, extend);
        return result;
    }
})();

(function(){
    $A.initBasicFunctions = function (module, moduleName) {
        var module = module || false;
        if (module === false)
            return false;
        var moduleName = moduleName || false;
        if (moduleName === false)
            return false;
        var moduleNameLower = moduleName.toLowerCase();
        var moduleNameLowerFirst = moduleName.charAt(0).toLowerCase() + moduleName.slice(1);

        var p = module.prototype;
        p.init = p.init || function(){
            var t = this;
            if(typeof t.d.create === 'undefined'){
                t.d.create = function(){};
            }
            if(typeof t.d.createFunctions === 'undefined'){
                t.d.createFunctions = [];
            }
            if(typeof t.d.remove === 'undefined'){
                t.d.remove = function(){};
            }

            for(var i in t.d){
                if(typeof $A.default[moduleNameLowerFirst][i] !== 'undefined'){
                    if ($A.default[moduleNameLowerFirst][i] instanceof jQuery) {
                        $A.default[moduleNameLowerFirst][i] = $A.default[moduleNameLowerFirst][i].clone();
                    }
                    t.d[i] = $A.default[moduleNameLowerFirst][i];
                }
            }
        };
        p.initParameter = p.initParameter || function(obj){
            var t = this;
            if (typeof obj.id === 'string' || typeof obj.id === 'number')
                t.id(obj.id);
            if (typeof obj.create === 'function')
                t.create(obj.create);
            if (typeof obj.remove === 'function')
                t.remove(obj.remove);
            if (typeof obj.buttons === 'array' || typeof obj.buttons === 'object')
                t.buttons(obj.buttons);
            if (typeof obj.target !== 'undefined')
                t.drawTo(obj.target);
            if (typeof obj.data !== 'undefined')
                t.data(obj.data);
            if (typeof obj.skin !== 'undefined')
                t.skin(obj.skin);
        };
        p.create = p.create || function (func) {
            if (typeof func === 'function') {
                this.d.create = func;
            } else {
                return this.d.create.apply(this, [this, this.d.$widget]);
            }
            return this;
        };
        p.widget = p.widget || function () {
            return this.d.$widget;
        };
        p.skin = p.skin || function (skin) {
            if (typeof skin !== 'undefined') {
                this.d.skin = skin;
                this.d.$widget.removeClassPrefix('automizy-skin-');
                this.d.$widget.addClass('automizy-skin-' + skin);
                return this;
            }
            return this.d.skin;
        };
        p.draw = p.drawTo = p.draw || function ($target) {
            var t = this;
            var $target = $target || $('body');
            t.d.$widget.appendTo($target);
            t.d.hasObject = true;
            setTimeout(function () {
                for (var i = 0; i < t.d.createFunctions.length; i++) {
                    t.d.createFunctions[i]();
                }
                t.create();
            }, 50);
            return this;
        };
        p.show = p.show || function () {
            var t = this;
            if (!t.d.hasObject) {
                t.draw();
            }
            this.d.$widget.ashow();
            return this;
        };
        p.hide = p.hide || function () {
            var t = this;
            $A.setWindowScroll(true, this.id());
            if (typeof this.d.close === 'function')
                this.d.close(this, t.d.$widget);
            if (typeof this.hash === 'function' && this.hash() !== false)
                $A.hashChange(this.hash(), false);
            this.d.$widget.ahide();
            return this;
        };
        p.remove = p.remove || function (func) {
            if (typeof func === 'function') {
                this.d.remove = func;
                return this;
            }
            if(!this.d.hasObject){
                this.d.$widget.appendTo($('body:first'));
            }
            if(typeof this.d.removeAnimation === 'function'){
                this.d.removeAnimation.apply(this, [this, this.d.$widget]);
            }else {
                var parent = this.d.$widget[0].parentElement;
                if(typeof parent !== 'undefined' && parent !== null && typeof parent.removeChild === 'function') {
                    parent.removeChild(this.d.$widget[0]);
                }
            }
            $A.setWindowScroll(true, this.id());
            delete $A.d[moduleNameLower + "s"][this.id()];
            this.d.remove.apply(this, [this, this.d.$widget]);
            return true;
        };
        p.id = p.id || function (id) {
            if (typeof id === 'number' || typeof id === 'string') {
                if ($A.setWindowScroll(true, this.d.id)) {
                    $A.setWindowScroll(false, id);
                }
                $A.d[moduleNameLower + "s"].renameProperty(this.d.id, id);
                this.d.$widget.attr('id', id);
                this.d.id = id;
                return this;
            }
            if (typeof this.d.id === 'undefined') {
                this.d.id = this.widget().attr('id') || 'automizy-' + moduleNameLower + '-' + $A.getUniqueString();
                this.id(this.d.id);
            }
            return this.d.id;
        };
        p.data = p.data || function (data, value) {
            var t = this;
            if (typeof t.d.data === 'undefined')
                t.d.data = {};
                t.d.$widget[0].automizyData = {};
            if (typeof data === 'undefined') {
                return t.d.data;
            }
            if(typeof data === 'array' || typeof data === 'object'){
                for(var i in data){
                    t.d.data[i] = data[i];
                    t.d.$widget[0].automizyData[i] = data[i];
                }
                return t;
            }
            if (typeof value === 'undefined') {
                return t.d.data[data];
            }

            t.d.data[data] = value;
            t.d.$widget[0].automizyData[data] = value;
            return t;
        };

        p.addButton = p.addButton || function (obj) {
            var t = this;
            if (typeof t.d.buttons === 'undefined')
                return t;
            if (typeof obj !== 'undefined') {
                if (obj instanceof $A.m.Button || obj instanceof $A.m.Input) {
                    obj.drawTo(t.d.$buttons || t.d.$widget);
                } else {
                    obj.target = obj.target || t.d.$buttons || t.d.$widget;
                    var button = $A.newButton(obj);
                    t.d.buttons.push(button);
                }
                t.d.$widget.addClass('has-button');
                return t;
            }
            var button = $A.newButton();
            t.d.buttons.push(button);
            button.drawTo(t.d.$buttons || t.d.$widget);
            return button;
        };
        p.removeButton = p.removeButton || function (button) {
            var t = this;
            if (typeof t.d.buttons === 'undefined')
                return t;
            if (typeof button === 'string') {
                for (var i = 0; i < t.d.buttons.length; i++) {
                    if (t.d.buttons[i].id === button)
                        t.d.buttons[i].remove();
                }
            } else if (typeof button === 'object') {
                button.remove();
            }
            return t;
        };
        p.buttons = p.buttons || function (buttons) {
            var t = this;
            if (typeof t.d.buttons === 'undefined')
                t.d.buttons = [];
            if (typeof buttons !== 'undefined') {
                for (var i = 0; i < t.d.buttons.length; i++) {
                    t.d.buttons[i].remove();
                }
                for (var i in buttons) {
                    t.addButton(buttons[i]);
                }
                return t;
            }
            return t.d.buttons;
        };

        $A.m[moduleName] = module;
        $A.d[moduleNameLower + "s"] = {};
        $A.default[moduleNameLowerFirst] = $A.default[moduleNameLowerFirst] || {};
        $A["new" + moduleName] = function (obj) {
            var t = new module(obj);
            $A.d[moduleNameLower + "s"][t.id()] = t;
            return t;
        };
        $A["get" + moduleName] = function (id) {
            return $A.d[moduleNameLower + "s"][id];
        };
        $A["getAll" + moduleName] = function () {
            return $A.d[moduleNameLower + "s"];
        };
        $A["remove" + moduleName] = function (id) {
            var elem = $A["get" + moduleName](id) || {};
            if (typeof elem.remove !== 'undefined')
                return elem.remove();
            return true;
        };
        $A["removeAll" + moduleName] = function () {
            for (var i in $A["getAll" + moduleName]()) {
                $A["remove" + moduleName](i);
            }
            return true;
        };
        $A[moduleNameLowerFirst] = function(obj){
            if(typeof obj === 'undefined'){
                return $A["new" + moduleName]();
            }else if(typeof obj === 'string' || typeof obj === 'number'){
                return $A["get" + moduleName](obj) || $A["new" + moduleName]().id(obj);
            }else{
                if(obj instanceof HTMLElement){
                    obj = $(obj);
                }
                if(obj instanceof jQuery){
                    return $A["get" + moduleName](obj.attr('id')) || $A["new" + moduleName](obj);
                }
            }
            return $A["new" + moduleName](obj);
        };
    };
})();

(function(){
    var Button = function (obj) {
        var t = this;
        t.d = {
            $widget:$('<span class="automizy-button"></span>'),
            $widgetButton: $('<a href="javascript:;"></a>'),
            text: 'My Button',
            skin: 'simple-white',
            float: 'none',
            width: '',
            hasObject: false,
            newRow:false,
            disabled:false,
            click:function(){},
            create: function () {
            },
            id: 'automizy-button-' + $A.getUniqueString()
        };
        t.init();

        t.d.$widgetButton.appendTo(t.d.$widget);
        t.d.$widgetButton.text(t.d.text);
        t.d.$widget.addClass('automizy-skin-' + t.d.skin).attr('id', t.id());
        t.d.$widgetButton.click(function () {
            t.click();
        });
        if (typeof obj !== 'undefined') {
            if (typeof obj.disabled !== 'undefined')
                t.disabled(obj.disabled);
            if (typeof obj.text !== 'undefined')
                t.text(obj.text);
            if (typeof obj.html !== 'undefined')
                t.html(obj.html);
            if (typeof obj.float !== 'undefined')
                t.float(obj.float);
            if (typeof obj.width !== 'undefined')
                t.width(obj.width);
            if (typeof obj.click !== 'undefined')
                t.click(obj.click);
            if (typeof obj.newRow !== 'undefined')
                t.newRow(obj.newRow);
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
            if(newRow){
                t.d.$widget.addClass('new-row');
            }else{
                t.d.$widget.removeClass('new-row');
            }
            return t;
        }
        return t.d.newRow;
    };
    p.click = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.click = func;
        } else {
            if(!t.disabled())t.d.click.apply(this, [this, this.d.$widget]);
        }
        return t;
    };
    p.button = function () {
        var t = this;
        return t.d.$widgetButton;
    };
    

    $A.initBasicFunctions(Button, "Button");

})();

(function(){
    $A.d.lastWindowScroll = {top: 0, left: 0};
    $A.d.windowScrollIds = [];
    $A.d.hasScroll = [];
    $A.setWindowScroll = function (a, id) {
        if (typeof a === "undefined") {
            return $A.d.hasScroll;
        }
        var id = id || false;
        var ret = false;
        if (id !== false) {
            var index = $A.d.windowScrollIds.indexOf(id);
            var inArray = (index > -1);
            if (a === true) {
                if (inArray) {
                    $A.d.windowScrollIds.splice(index, 1);
                    ret = true;
                }
            } else {
                if (!inArray) {
                    $A.d.windowScrollIds.push(id);
                    ret = true;
                }
            }
        }else{
            if(a === true){
                $A.d.windowScrollIds = [];
                ret = true;
            }
        }
        if ($A.d.windowScrollIds.length > 0) {
            $A.d.hasScroll = false;
            $A.d.lastWindowScroll.top = $(window).scrollTop();
            $A.d.lastWindowScroll.left = $(window).scrollLeft();
                    return true;
        } else {
            $A.d.hasScroll = a;
            if (!a) {
                $A.d.lastWindowScroll.top = $(window).scrollTop();
                $A.d.lastWindowScroll.left = $(window).scrollLeft();
            }
        }
        return ret;
    };
    $(window).scroll(function () {
        if (!$A.d.hasScroll) {
            $(window).scrollTop($A.d.lastWindowScroll.top);
            $(window).scrollLeft($A.d.lastWindowScroll.left);
        }
    });
})();

(function(){
    Object.defineProperty(Object.prototype, "renameProperty", {
        value: function (oldName, newName) {
            if (this.hasOwnProperty(oldName)) {
                this[newName] = this[oldName];
                delete this[oldName];
            }
            return this;
        },
        enumerable: false
    });
    Object.defineProperty(Array.prototype, "remove", {
        value: function (item) {
            var removeCounter = 0;

            for (var index = 0; index < this.length; index++) {
                if (this[index] === item) {
                    this.splice(index, 1);
                    removeCounter++;
                    index--;
                }
            }
            return removeCounter;
        },
        enumerable: false
    });
})();

(function(){
    $A.getUniqueString = function(){
        var str = (Math.random() + 1).toString(36).substring(2);
        if($.inArray(str, $A.d.uniques) >= 0){
            return $A.getUniqueString();
        }
        $A.d.uniques.push(str);
        return str;
    }
})();

(function(){
    var Dialog = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<table cellpadding="0" cellspacing="0" border="0" class="automizy-dialog"></table>'),
            $cell: $('<td class="automizy-dialog-cell"></td>'),
            $box: $('<div class="automizy-dialog-box"></div>'),
            $head: $('<div class="automizy-dialog-head"></div>'),
            $buttons: $('<div class="automizy-dialog-buttons"></div>'),
            $content: $('<div class="automizy-dialog-content"></div>'),
            buttons: [],
            positionX: 'center',
            positionY: 'middle',
            title: 'My Dialog',
            width: '60%',
            maxWidth: '100%',
            minWidth: '250px',
            minHeight:'0px',
            zIndex: 2501,
            isClose: true,
            hasObject: false,
            hash: false,
            closable:true,
            id: 'automizy-dialog-' + $A.getUniqueString(),
            create: function () {
            },
            open: function () {
            },
            close: function () {
            }
        };
        t.init();

        var $tr = $('<tr></tr>');
        t.d.$cell.appendTo($tr);
        $tr.appendTo(t.d.$widget);
        t.d.$box.click(function () {
            t.d.isClose = false;
        }).appendTo(t.d.$cell);
        t.d.$widget.attr('id', t.id()).click(function () {
            if (t.d.isClose)
                t.close();
            else
                t.d.isClose = true;
        });
        t.d.$head.appendTo(t.d.$box);
        t.d.$content.appendTo(t.d.$box);
        t.d.$buttons.appendTo(t.d.$box);

        if (typeof obj !== 'undefined') {
            if (typeof obj.title !== 'undefined')
                t.title(obj.title);
            if (typeof obj.positionX !== 'undefined')
                t.positionX(obj.positionX);
            if (typeof obj.positionY !== 'undefined')
                t.positionY(obj.positionY);
            if (typeof obj.position !== 'undefined')
                t.position(obj.position);
            if (typeof obj.width !== 'undefined')
                t.width(obj.width);
            if (typeof obj.maxWidth !== 'undefined')
                t.maxWidth(obj.maxWidth);
            if (typeof obj.minWidth !== 'undefined')
                t.minWidth(obj.minWidth);
            if (typeof obj.maxWidth !== 'undefined')
                t.maxWidth(obj.maxWidth);
            if (typeof obj.minHeight !== 'undefined')
                t.minHeight(obj.minHeight);
            if (typeof obj.zIndex !== 'undefined')
                t.zIndex(obj.zIndex);
            if (typeof obj.closable !== 'undefined')
                t.closable(obj.closable);
            if (typeof obj.open === 'function')
                t.open(obj.open);
            if (typeof obj.close === 'function')
                t.close(obj.close);
            if (typeof obj.content !== 'undefined')
                t.content(obj.content);
            if (typeof obj.hash !== 'undefined')
                t.hash(obj.hash);
            t.initParameter(obj);
        }
    };

    var p = Dialog.prototype;

    p.title = function (newTitle) {
        var t = this;
        if (typeof newTitle !== 'undefined') {
            t.d.title = newTitle;
            t.d.$head.html(newTitle);
            return t;
        }
        return t.d.title;
    };
    p.hash = function (hash) {
        var t = this;
        if (typeof hash !== 'undefined') {
            t.d.hash = hash;
            return t;
        }
        return t.d.hash;
    };
    p.content = function (content) {
        var t = this;
        if (typeof content !== 'undefined') {
            t.d.$content.empty();
            if (content instanceof jQuery) {
                content.appendTo(t.d.$content);
            } else if (typeof content === "object" && typeof content.draw === "function") {
                content.draw(t.d.$content);
            } else {
                t.d.$content.html(content);
            }
            return t;
        }
        return t.d.$content;
    };
    p.positionX = function (x) {
        var t = this;
        if (typeof x !== 'undefined') {
            $cell = t.d.$cell;
            if (x === 'left') {
                $cell.css({textAlign: 'left', textIndent: 0});
            } else if (x === 'right') {
                $cell.css({textAlign: 'right', textIndent: 0});
            } else if (x === 'center' || x === 'middle') {
                x = 'center';
                $cell.css({textAlign: 'center', textIndent: 0});
            } else {
                $cell.css({textAlign: 'left', textIndent: x});
            }
            t.d.positionX = x;
            return t;
        }
        return t.d.positionX;
    };
    p.positionY = function (y) {
        var t = this;
        if (typeof y !== 'undefined') {
            $cell = t.d.$cell;
            if (y === 'top') {
                $cell.css({verticalAlign: 'top', paddingTop: 0, paddingBottom: 0});
            } else if (y === 'bottom') {
                $cell.css({verticalAlign: 'bottom', paddingTop: 0, paddingBottom: 0});
            } else if (y === 'center' || y === 'middle') {
                y = 'middle';
                $cell.css({verticalAlign: 'middle', paddingTop: 0, paddingBottom: 0});
            } else {
                /*
                if ($(t.d.$box).height()+parseInt(y)>$(window).height()){
                    $(t.d.$content).height($(t.d.$content).height()+($(window).height()-$(t.d.$box).height()-parseInt(y)));
                }
                */
               
                $cell.css({verticalAlign: 'top', paddingTop: y, paddingBottom: y});
            }
            t.d.positionY = y;
            t.setMaxHeight();
            return t;
        }
        return t.d.positionY;
    };
    p.position = function (xy) {
        var t = this;
        if (typeof xy === 'string') {
            var pos = xy.split(" ");
            t.positionX(pos[0]);
            t.positionY(pos[1]);
            t.d.positionX=pos[0];
            t.d.positionY=pos[1];
            t.setMaxHeight();
            return t;
        } else if (typeof xy !== 'undefined') {
            console.warn('Bad parameter type.', xy);
        }
        return t.d.positionX + ' ' + t.d.positionY;
    };
    p.width = function (width) {
        var t = this;
        if (typeof width !== 'undefined') {
            t.d.width = width;
            t.d.$box.width(width);
            return t;
        }
        return t.d.width;
    };
    p.maxWidth = function (maxWidth) {
        var t = this;
        if (typeof maxWidth !== 'undefined') {
            t.d.maxWidth = maxWidth;
            t.d.$box.css('maxWidth', maxWidth);
            return t;
        }
        return t.d.maxWidth;
    };
    p.minWidth = function (minWidth) {
        var t = this;
        if (typeof minWidth !== 'undefined') {
            t.d.minWidth = minWidth;
            t.d.$box.css('minWidth', minWidth);
            return t;
        }
        return t.d.minWidth;
    };
    p.minHeight = function (minHeight) {
        var t = this;
        if (typeof minHeight !== 'undefined') {
            t.d.minHeight = minHeight;
            t.d.$box.css('min-height', minHeight);
            t.d.$content.css('min-height', parseInt(t.d.$box.css('min-height')) - 108 + 'px');
            t.setMaxHeight();
            return t;
        }
        return t.d.minHeight;
    };
    p.zIndex = function (zIndex) {
        var t = this;
        if (typeof zIndex !== 'undefined' && Number(zIndex) === zIndex && zIndex % 1 === 0) {
            t.d.zIndex = zIndex;
            t.d.$widget.css({zIndex: zIndex});
            return t;
        } else {
            console.warn('Bad parameter type.', zIndex);
        }
        return t.d.zIndex;
    };
    p.show = function (func) {
        var t = this;
        $A.setWindowScroll(false, this.d.id);
        if (!t.d.hasObject) {
            t.draw();
        }
        this.d.$widget.ashow();        
        t.setMaxHeight();
        return this;
    };
    p.open = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.open = func;
        } else {
            if (t.hash() !== false)
                $A.hashChange(t.hash());
            t.d.open.apply(this, [this, this.d.$widget]);
            t.show();
        }
        t.setMaxHeight();
        return t;
    };
    p.closable = function (closable) {
        var t = this;
        if (typeof closable !== 'undefined') {
            t.d.closable = closable;
        } else {
            return t.d.closable;
        }
        return t;
    };
    p.close = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.close = func;
        } else {
            if(t.d.closable){
                t.hide();
                t.d.close.apply(this, [this, this.d.$widget]);
            }
        }
        return t;
    };
        
    p.setMaxHeight = function(){
        var t=this;
        var maxHeight=$(window).height()-$(t.d.$buttons).outerHeight()-$(t.d.$head).outerHeight();
        if (parseInt(t.d.positionY)!=='NaN')
            maxHeight-=parseInt(t.d.positionY);
        $(t.d.$content).css({
            'max-height':maxHeight
        });
    };    

    $A.initBasicFunctions(Dialog, "Dialog");
    
})();

(function(){
    $A.d.defines.input = {};

    $A.d.defines.input.setupSelectObj = {
        multiple: false,
        header: false,
        selectedList: 1,
        create: function (event, ui) {
            var $t = $(this);
            $t.removeAttr('multiple');
            var ddbox = $t.multiselect("widget");
            var span = ddbox.find(".ui-multiselect-checkboxes span");
            span.each(function () {
                $(this).html($(this).html().replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
            });

            var box = $t.parent().find(".ui-multiselect");
            box.find(".ui-icon").removeClass("ui-icon-triangle-2-n-s");
            setTimeout(function(){
                box.css({maxWidth:$t.width()});
            }, 1);
        },
        open: function (event, ui) {
            var ddbox = $(this).multiselect("widget");
            ddbox.width($(this).parent().find(".ui-multiselect").width() + 8);
            ddbox.find(".ui-corner-all").removeClass("ui-corner-all");
            if (ddbox.find(".ui-multiselect-checkboxes li:first").find("span").html().length <= 0) {
                ddbox.find(".ui-multiselect-checkboxes li:first").css({
                    "height": "0",
                    "margin": "0",
                    "padding": "0",
                    "border": "none",
                    "opacity": "0",
                    "pointer-events": "none"
                });
            }
            //$(this).multiselect("widget").find(".ui-multiselect-checkboxes").getNiceScroll().show();
        },
        close: function (event, ui) {
            //$(this).multiselect("widget").find(".ui-multiselect-checkboxes").getNiceScroll().hide();
        },
        click: function (event, ui) {
            //$(this).trigger('change');
        }
    };

    $A.d.defines.input.setupSelectListObj = {
        multiple: false,
        height: 150,
        header: false,
        selectedList: 1,
        create: function (event, ui) {
            var $t = $(this);
            $t.attr('multiple', 'multiple');
            var ddbox = $t.multiselect("widget");
            var span = ddbox.find(".ui-multiselect-checkboxes span");
            span.each(function () {
                $(this).html($(this).html().replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
            });
            var box = $t.parent().find(".ui-multiselect");
            box.find(".ui-icon").removeClass("ui-icon-triangle-2-n-s");
            setTimeout(function(){
                box.css({maxWidth:$t.width()});
            }, 1);
            $t.multiselect("open");
        },
        open: function (event, ui) {
            var box = $(this).parent().find(".ui-multiselect");
            var ddbox = $(this).multiselect("widget");
            ddbox.width($(this).parent().find(".ui-multiselect").width() + 8);
            ddbox.find(".ui-corner-all").removeClass("ui-corner-all");
            if (ddbox.find(".ui-multiselect-checkboxes li:first").find("span").html().length <= 0) {
                ddbox.find(".ui-multiselect-checkboxes li:first").css({
                    "height": "0",
                    "margin": "0",
                    "padding": "0",
                    "border": "none",
                    "opacity": "0",
                    "pointer-events": "none"
                });
            }
            ddbox.find(".ui-multiselect-checkboxes").css({
                backgroundColor: "#f7f8f0"
            })
            box.css({
                display: "none"
            });
            $(function () {
                ddbox.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    zIndex: 0
                }).appendTo(box.parent());
            });

        },
        beforeclose: function (event, ui) {
            return false;
        },
        click: function (event, ui) {
            $(this).trigger('change');
        }
    };

    $A.d.defines.input.setupSelectSearchCheckObj = {
        multiple: true,
        header: '',
        selectedList: 1,
        noneSelectedText: '',
        selectedText: '# selected',
        create: function (event, ui) {
            var $t = $(this);
            $t.attr('multiple', 'multiple');
            $t.multiselect("uncheckAll").multiselectfilter({label: "Filter: "});
            var ddbox = $t.multiselect("widget");
            var span = ddbox.find(".ui-multiselect-checkboxes span");

            var box = $t.parent().find(".ui-multiselect");
            setTimeout(function(){
                box.css({maxWidth:$t.width()});
            }, 1);
            span.each(function () {
                $(this).html($(this).html().replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
            });
        },
        beforeopen: function () {
            var ddbox = $(this).multiselect("widget");
            var $h = ddbox.find('.ui-widget-header');
            ddbox.find(".ui-multiselect-filter").contents().filter(function () {
                return this.nodeType != 1;
            }).remove();
            if ($h.find('svg').length < 1) {
                $('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="float:right; margin:2px 4px 0 0"><g transform="scale(0.03)"><path fill="none" stroke="#999" stroke-width="36" stroke-linecap="round"d="m280,278a153,153 0 1,0-2,2l170,170m-91-117 110,110-26,26-110-110"/></g></svg>').appendTo($h);
            }
            $A.setWindowScroll(false, 'multiselect');
        },
        beforeclose: function () {
            $A.setWindowScroll(true, 'multiselect');
        }
    }
    
    $A.d.defines.input.upAndDownControl = {
        create: function (tp_inst, obj, unit, val, min, max, step) {
            $('<input class="ui-timepicker-input" value="' + val + '" maxlength="' + max.toString().length + '" style="width:50%">')
                    .appendTo(obj)
                    .jStepper({
                        minValue: min,
                        maxValue: max,
                        allowDecimals: false
                    })
                    .spinner({
                        min: min,
                        max: max,
                        step: step,
                        change: function (e, ui) {
                            if (e.originalEvent !== undefined)
                                tp_inst._onTimeChange();
                            tp_inst._onSelectHandler();
                        },
                        spin: function (e, ui) {
                            tp_inst.control.value(tp_inst, obj, unit, ui.value);
                            tp_inst._onTimeChange();
                            tp_inst._onSelectHandler();
                        }
                    });
            return obj;
        },
        options: function (tp_inst, obj, unit, opts, val) {
            if (typeof (opts) == 'string' && val !== undefined)
                return obj.find('.ui-timepicker-input').spinner(opts, val);
            return obj.find('.ui-timepicker-input').spinner(opts);
        },
        value: function (tp_inst, obj, unit, val) {
            if (val !== undefined)
                return obj.find('.ui-timepicker-input').spinner('value', val);
            return obj.find('.ui-timepicker-input').spinner('value');
        },
        click: function (event, ui) {
            $(this).trigger('change');
        }
    };
})();

(function(){
    $A.parseBoolean = function (value, nullOnFailure) {
        if (typeof value === 'string')
            value = value.toLowerCase();
        switch (value) {
            case true:
            case 'true':
            case 1:
            case '1':
            case 'on':
            case 'yes':
            case 'y':
            case '✓':
            case '✔':
            case '☑':
            case '☒':
                value = true;
                break;
            case false:
            case 'false':
            case 0:
            case '0':
            case 'off':
            case 'no':
            case 'n':
            case 'x':
            case '✗':
            case '✘':
            case '☐':
                value = false;
                break;
            default:
                if (nullOnFailure) {
                    value = null;
                } else {
                    value = false;
                }
                break;
        }
        return value;
    };
})();

(function(){
    var Validator = function (obj) {
        var t = this;
        t.d = {
            email: false,
            domain: false,
            url: false,
            domainOrUrl: false,
            int: false,
            number: false,
            minLength: false,
            maxLength: false,
            min: false,
            max: false,
            file: false,
            sameas: false,
            isValid: true,
            notEmpty:false,
            validValues: [],
            errors: [],
            options: {},
            id: 'automizy-validator-' + $A.getUniqueString(),
            regular: {
                email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                domain: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
                url: /^(((https?|ftp):\/\/)|(www\.))(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
            },
            input: false,
            value: ''
        };

        /*
         if (typeof obj !== "undefined") {
         if (typeof obj === "function" && obj instanceof Input) {
         t.d.input = obj;
         } else if (typeof obj === 'object') {
         if (typeof obj.input !== 'undefined') {
         if (obj.input instanceof Input) {
         t.d.input = obj.input;
         } else if (typeof obj.input === 'string') {
         t.d.input = $A.getInput(obj.input) || false;
         }
         }
         }
         if (t.d.input instanceof Input)
         t.d.value = t.d.input.val();
         }
         */

        if (typeof obj === 'object') {
            t.set(obj);
        }
    };

    var p = Validator.prototype;
    p.set = function (obj) {
        var t = this;
        if (typeof obj === 'string'){
            var os = obj;
            obj = {};
            obj[os] = true;
        }
        if (typeof obj.value !== 'undefined')
            t.d.value = obj.value;
        if (typeof obj.email !== 'undefined')
            t.d.options.email = $A.parseBoolean(obj.email);
        if (typeof obj.domain !== 'undefined')
            t.d.options.domain = $A.parseBoolean(obj.domain);
        if (typeof obj.url !== 'undefined')
            t.d.options.url = $A.parseBoolean(obj.url);
        if (typeof obj.domainOrUrl !== 'undefined')
            t.d.options.domainOrUrl = $A.parseBoolean(obj.domainOrUrl);
        if (typeof obj.int !== 'undefined')
            t.d.options.int = $A.parseBoolean(obj.int);
        if (typeof obj.number !== 'undefined')
            t.d.options.number = $A.parseBoolean(obj.number);
        if (typeof obj.minLength !== 'undefined')
            t.d.options.minLength = parseInt(obj.minLength);
        if (typeof obj.maxLength !== 'undefined')
            t.d.options.maxLength = parseInt(obj.maxLength);
        if (typeof obj.min !== 'undefined')
            t.d.options.min = parseInt(obj.min);
        if (typeof obj.max !== 'undefined')
            t.d.options.max = parseInt(obj.max);
        if (typeof obj.file !== 'undefined')
            t.d.options.file = $A.parseBoolean(obj.file);
        if (typeof obj.sameas !== 'undefined')
            t.d.options.sameas = obj.sameas;
        if (typeof obj.notEmpty !== 'undefined')
            t.d.options.notEmpty = obj.notEmpty;
        if (typeof obj.invalidValue !== 'undefined')
            t.d.options.invalidValue = obj.invalidValue;
        return t;
    };
    p.run = function (obj) {
        var t = this;
        if ((typeof obj === 'object' || typeof obj === 'array') && !$.isArray(obj)) {
            t.set(obj);
        }
        if (typeof obj === 'string' || typeof obj === 'number' || $.isArray(obj)) {
            t.value(obj);
        }
        t.d.errors = [];
        t.d.isValid = true;
        for (var i in t.d.options) {
            var a = t.d.options[i];
            if (i === 'email' && a === true)
                t.email(t.d.value);
            if (i === 'domain' && a === true)
                t.domain(t.d.value);
            if (i === 'url' && a === true)
                t.url(t.d.value);
            if (i === 'domainOrUrl' && a === true)
                t.domainOrUrl(t.d.value);
            if (i === 'int' && a === true)
                t.int(t.d.value);
            if (i === 'num' && a === true)
                t.num(t.d.value);
            if (i === 'minLength' && !isNaN(a))
                t.minLength(t.d.value, a);
            if (i === 'maxLength' && !isNaN(a))
                t.maxLength(t.d.value, a);
            if (i === 'min' && !isNaN(a))
                t.min(t.d.value, a);
            if (i === 'max' && !isNaN(a))
                t.max(t.d.value, a);
            if (i === 'file' && a === true)
                t.file(t.d.value);
            if (i === 'sameas' && typeof a !== 'undefined')
                t.sameas(t.d.value, a);
            if (i === 'notEmpty' && a === true)
                t.notEmpty(t.d.value);
            if (i === 'invalidValue')
                t.invalidValue(t.d.value, a);
        }
        return t;
    };
    p.execute = function (obj) {
        var t = this;
        if(typeof obj === 'undefined')var obj = false;
        if(obj === null)obj = [];
        t.run(obj);
        return t.d.isValid;
    };

    p.errors = function () {
        return this.d.errors;
    };

    p.value = p.val = function (value) {
        var t = this;
        if (typeof value !== 'undefined') {
            t.d.value = value;
            return t;
        }
        return t.d.value;
    };

    p.email = function (value) {
        this.d.email = true;
        var a = this.d.regular.email.test(value);
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Invalid email address");
        }
        return a;
    };
    p.domain = function (value) {
        this.d.domain = true;
        var a = this.d.regular.domain.test(value);
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Invalid domain");
        }
        return a;
    };
    p.url = function (value) {
        this.d.url = true;
        var a = this.d.regular.url.test(value);
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Invalid URL");
        }
        return a;
    };
    p.domainOrUrl = function (value) {
        this.d.domainOrUrl = true;
        var a = this.d.regular.domain.test(value) || this.d.regular.url.test(value);
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Invalid domain or URL");
        }
        return a;
    };
    p.int = p.integer = function (value) {
        this.d.int = true;
        var a = (value == +value && value == (value | 0));
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Not an integer");
        }
        return a;
    };
    p.num = p.number = function (value) {
        this.d.number = true;
        var a = !isNaN(value);
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Not a number");
        }
        return a;
    };
    p.minLength = p.minLen = function (value, len) {
        len = parseInt(len);
        this.d.minLength = len;
        var a = value.length >= len;
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Too short");
        }
        return a;
    };
    p.notEmpty = function (value) {
        this.d.notEmpty = true;
        var a = value != '';
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("No empty");
        }
        return a;
    };
    p.maxLength = function (value, len) {
        len = parseInt(len);
        this.d.maxLength = len;
        var a = value.length <= len;
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Too long");
        }
        return a;
    };
    p.min = function (value, number) {
        number = parseInt(number);
        this.d.min = number;
        var a = value >= number;
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Too little");
        }
        return a;
    };
    p.max = function (value, number) {
        number = parseInt(number);
        this.d.max = number;
        var a = value <= number;
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Too many");
        }
        return a;
    };
    p.file = function () {
    };
    p.sameas = function (value, otherValue) {
        if(typeof otherValue.val === 'function'){
            otherValue = otherValue.val();
        }
        var a = value === otherValue;
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("The values are not equals");
        }
        return a;
    };
    p.invalidValue = function (value, invalidValue) {
        this.d.invalidValue = invalidValue;
        var a = value != invalidValue;
        if (a === false) {
            this.d.isValid = false;
            this.d.errors.push("Invalid value");
        }
        return a;
    };

    p.errors = function () {
        return this.d.errors;
    };


    p.id = function (id) {
        if (typeof id === 'number' || typeof id === 'string') {
            $A.d.validator.renameProperty(this.d.id, id);
            this.d.id = id;
            return this;
        }
        return this.d.id;
    };
    p.data = function (data, value) {
        if (typeof this.d.data === 'undefined')
            this.d.data = {};
        if (typeof data !== 'string') {
            return this.d.data;
        }
        if (typeof value === 'undefined') {
            return this.d.data[data];
        }
        this.d.data[data] = value;
        return this;
    };

    $A.m.Validator = Validator;
    $A.d.validator = new $A.m.Validator();
    $A.validate = function(){
        return $A.d.validator;
    };
    $A.newValidator = $A.createValidator = function (obj) {
        var t = new Validator(obj);
        $A.d.validators[t.d.id] = t;
        return t;
    };
    $A.getValidator = function (id) {
        return $A.d.validatorss[id];
    };
    $A.getAllValidator = function () {
        return $A.d.validators;
    };
    $A.removeValidator = $A.deleteValidator = function (id) {
        return $A.getValidator[id].remove();
    };
    $A.removeAllValidator = $A.deleteAllValidator = function (id) {
        for (i in $A.getAllValidator())
            $A.getAllValidator()[i].remove();
    };
})();

(function(){
    var Input = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<span class="automizy-input new-row"></span>'),
            $widgetInput: $('<input type="text" />'),
            $widgetInputBox: $('<span class="automizy-input-box"></span>'),
            $widgetInputBoxError: $('<span class="automizy-input-box-error"></span>'),
            $widgetLabel: $('<label></label>'),
            $widgetLabelAfter: $('<span></span>'),
            $widgetHelp: $('<img src="'+$A.images.helpIcon+'" class="automizy-input-help" />'),
            $widgetHelpContent: $('<div class="automizy-input-help-content"><img src="'+$A.images.helpArrow+'" class="automizy-input-help-content-arrow" /></div>'),
            $widgetHelpContentInner: $('<span></span>'),
            $input: $('<input />'),
            $textarea: $('<textarea></textarea>'),
            $select: $('<select></select>'),
            specialElements: [],
            type: 'text',
            skin: 'simple-automizy',
            multiple: false,
            multiselect: false,
            readonly: false,
            hasObject: false,
            isDatepicker: false,
            newRow: true,
            breakInput: false,
            needModify:false,
            labelPosition:'left',
            labelWidth:'',
            value: '',
            placeholder: '',
            name: '',
            width: '300px',
            height: 'auto',
            label: '',
            labelAfter: '',
            accept: [],
            items: {},
            validator: $A.newValidator(),
            validate: function () {
            },
            createFunctions: [],
            id: 'automizy-input-' + $A.getUniqueString(),
            click: function () {
            },
            change: function () {
            },
            enter: function () {
            },
            create: function () {
            }
        };
        t.init();

        t.d.$input.addClass('automizy-input');
        t.d.$textarea.addClass('automizy-input');
        t.d.$select.addClass('automizy-input');
        t.d.$widgetLabel.appendTo(t.d.$widget).attr('for', t.d.id + '-input').ahide();
        t.d.$widgetInput.appendTo(t.d.$widgetInputBox).attr('id', t.d.id + '-input');
        t.d.$widgetInput.click(function () {
            t.click();
        });
        t.d.$widgetInputBox.appendTo(t.d.$widget);
        t.d.$widgetLabelAfter.appendTo(t.d.$widget).ahide();
        t.d.$widgetInputBoxError.appendTo(t.d.$widget);
        t.d.$widgetHelpContentInner.appendTo(t.d.$widgetHelpContent);
        t.d.$widgetHelpContent.appendTo('body:first');
        t.d.$widgetHelp.appendTo(t.d.$widget).on('mouseenter click', function () {
            t.d.$widgetHelp.stop().fadeTo(250, 1);
            var posX = t.d.$widgetHelp.offset().left + 40;
            var posY = t.d.$widgetHelp.offset().top - 16;
            t.d.$widgetHelpContent.css({
                left: posX + 'px',
                top: posY + 'px'
            }).stop().fadeIn();
        }).mouseout(function () {
            t.d.$widgetHelpContent.stop().fadeOut();
            t.d.$widgetHelp.stop().fadeTo(250, 0.5);
        }).ahide();
        t.d.$widgetInputBoxError.appendTo(t.d.$widget);
        t.d.$widget.attr('type', 'text').attr('id', t.id()).addClass('automizy-skin-' + t.d.skin);
        t.d.$widgetInput.on('change keyup paste', function () {
            t.validate();
            t.change();
        }).keypress(function(e) {
            if (e.which == 13) {
                t.enter();
            }
        });
        if (typeof obj !== 'undefined') {
            if (typeof obj.label !== 'undefined')
                t.label(obj.label);
            if (typeof obj.labelAfter !== 'undefined')
                t.labelAfter(obj.labelAfter);
            if (typeof obj.type !== 'undefined')
                t.type(obj.type);
            if (typeof obj.disable !== 'undefined') {
                if (obj.disable)
                    t.disable();
                else
                    t.enable();
            }
            if (typeof obj.enable !== 'undefined') {
                if (obj.enable)
                    t.enable();
                else
                    t.disable();
            }
            if (typeof obj.checked !== 'undefined')
                t.checked(obj.checked);
            if (typeof obj.click !== 'undefined')
                t.click(obj.click);
            if (typeof obj.help !== 'undefined')
                t.help(obj.help);
            if (typeof obj.height !== 'undefined')
                t.height(obj.height);
            if (typeof obj.name !== 'undefined')
                t.name(obj.name);
            if (typeof obj.multiple !== 'undefined')
                t.multiple(obj.multiple);
            if (typeof obj.datepicker !== 'undefined')
                t.datepicker(obj.datepicker);
            if (typeof obj.multiselect !== 'undefined' && obj.multiselect !== false)
                t.multiselect(obj.multiselect);
            if (typeof obj.options !== 'undefined')
                t.options(obj.options);
            if (typeof obj.accept !== 'undefined')
                t.accept(obj.accept);
            if (typeof obj.readonly !== 'undefined')
                t.readonly(obj.readonly);
            if (typeof obj.newRow !== 'undefined')
                t.newRow(obj.newRow);
            if (typeof obj.width !== 'undefined')
                t.width(obj.width);
            if (typeof obj.placeholder !== 'undefined')
                t.placeholder(obj.placeholder);
            if (typeof obj.breakInput !== 'undefined')
                t.breakInput(obj.breakInput);
            if (typeof obj.labelPosition !== 'undefined')
                t.labelPosition(obj.labelPosition);
            if (typeof obj.labelWidth !== 'undefined')
                t.labelWidth(obj.labelWidth);
            if (typeof obj.change === 'function')
                t.change(obj.change);
            if (typeof obj.enter === 'function')
                t.enter(obj.enter);
            if (typeof obj.needModify !== 'undefined')
                t.needModify(obj.needModify);
            if (typeof obj.val !== 'undefined' || typeof obj.value !== 'undefined')
                t.val(obj.val || obj.value);
            if (typeof obj.validator !== 'undefined')
                t.validator(obj.validator);
            if (typeof obj.validate !== 'undefined')
                t.validate(obj.validate);
            if (typeof obj.focus !== 'undefined')
                t.focus(obj.focus);
            t.initParameter(obj);
        }
    };

    var p = Input.prototype;
    p.change = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.change = func;
        } else {
            t.d.change.apply(this, [this, this.d.$widget]);
        }
        return t;
    };
    p.enter = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.enter = func;
        } else {
            t.d.enter.apply(this, [this, this.d.$widget]);
        }
        return t;
    };
    p.focus = function () {
        var t = this;
        t.d.$widgetInput.focus();
        return t;
    };
    p.disable = function () {
        var t = this;
        t.d.$widgetInput.prop('disabled', true);
        if (t.d.multiselect)
            t.multiselect('disable');
        return t;
    };
    p.enable = function () {
        var t = this;
        t.d.$widgetInput.prop('disabled', false);
        if (t.d.multiselect)
            t.multiselect('enable');
        return t;
    };
    p.checked = function (checked) {
        var t = this;
        if (typeof checked !== 'undefined') {
            checked = $A.parseBoolean(checked);
            if (t.d.hasObject){
                t.d.$widgetInput.prop('checked', checked);
            }else {
                t.d.createFunctions.push(function () {
                    t.d.$widgetInput.prop('checked', checked);
                });
            }
            return t;
        }
        return t.input().is(':checked');
    };
    p.check = function () {
        var t = this;
        t.d.$widgetInput.prop('checked', true).trigger('change');
        return t;
    };
    p.uncheck = function () {
        var t = this;
        t.d.$widgetInput.prop('checked', false).trigger('change');
        return t;
    };
    p.label = function (label) {
        var t = this;
        if (typeof label !== 'undefined') {
            t.d.label = label;
            t.d.$widgetLabel.html(label).ashow();
            return t;
        }
        return t.d.label;
    };
    p.labelAfter = function (labelAfter) {
        var t = this;
        if (typeof labelAfter !== 'undefined') {
            t.d.labelAfter = labelAfter;
            t.d.$widgetLabelAfter.html(labelAfter).ashow();
            return t;
        }
        return t.d.labelAfter;
    };
    p.needModify = function (needModify) {
        var t = this;
        if (typeof needModify !== 'undefined') {
            t.d.needModify = $A.parseBoolean(needModify);
            return t;
        }
        return t.d.needModify;
    };
    p.labelPosition = function (labelPosition) {
        var t = this;
        if (typeof labelPosition !== 'undefined') {
            t.d.labelPosition = labelPosition;
            //t.d.$widgetLabel.html(label).ashow();
            if(t.d.labelPosition === 'left'){
                t.d.$widgetLabel.insertBefore(t.d.$widgetInput);
            }else{
                t.d.$widgetLabel.insertAfter(t.d.$widgetInput);
            }
            return t;
        }
        return t.d.labelPosition;
    };
    p.labelWidth = function (labelWidth) {
        var t = this;
        if (typeof labelWidth !== 'undefined') {
            t.d.labelWidth = labelWidth;
            t.d.$widgetLabel.css('width', labelWidth);
            return t;
        }
        return t.d.labelWidth;
    };
    p.help = function (help) {
        var t = this;
        if (typeof help !== 'undefined') {
            t.d.help = help;
            t.d.$widgetHelpContentInner.html(help);
            t.d.$widgetHelp.ashow();
            
            /*Sizing input if it has help icon*/
            t.d.$widgetInputBox.addClass('automizy-input-has-help');
            
            return t;
        }
        return t.d.help;
    };
    p.val = p.value = function (value) {
        var t = this;
        if (typeof value !== 'undefined') {
            t.d.value = value;
            if (t.d.type === 'file')
                t.input().data('value', value);
            else if(t.d.type === 'html')
                t.input().html(value);
            else
                t.input().val(value);
            if(t.d.multiselect){
                t.input().multiselect('refresh');
            }
            if(t.d.needModify){
                t.input().data('originalValue', value);
            }
            return t;
        }
        if(t.d.type === 'html'){
            return t.input().html();
        }
        return t.input().val();
    };
    p.name = function (name) {
        var t = this;
        if (typeof name !== 'undefined') {
            t.d.name = name;
            t.d.$widgetInput.attr('name', name);
            return t;
        }
        return t.d.$widgetInput.attr('name');
    };
    p.placeholder = function (placeholder) {
        var t = this;
        if (typeof placeholder !== 'undefined') {
            t.d.placeholder = placeholder;
            t.d.$widgetInput.attr('placeholder', placeholder);
            return t;
        }
        return t.d.placeholder;
    };
    p.width = function (width) {
        var t = this;
        if (typeof width !== 'undefined') {
            t.d.width = width;
            if (t.type() === 'file') {
                t.widget().add(t.d.$widgetInputBox).width('100%');
                t.input().data('table').width(width);
            } else {
                t.widget().width('auto');
                t.input().add(t.d.$widgetInputBox).width(width);
                if(t.d.multiselect){
                    t.input().next().css({maxWidth:width});
                }
            }
            return t;
        }
        return t.d.width;
    };
    p.height = function (height) {
        var t = this;
        if (typeof height !== 'undefined') {
            t.d.height = height;
            t.widget().height('auto');
            t.input().add(t.d.$widgetInputBox).height(height);
            return t;
        }
        return t.d.height;
    };
    p.type = function (type) {
        var t = this;
        if (typeof type !== 'undefined') {
            type = type.toLowerCase();
            t.d.type = type;
            var attributes = t.d.$widgetInput.getAttributes();
            delete attributes.type;
            delete attributes.checked;
            if (t.d.type === 'select') {
                t.d.$widgetInput = $('<select></select>');
            } else if (t.d.type === 'textarea') {
                t.d.$widgetInput = $('<textarea></textarea>');
            } else if (t.d.type === 'html') {
                t.d.$widgetInput = $('<span></span>');
            } else if (t.d.type === 'date') {
                t.datepicker();
            } else if (t.d.type === 'datetime') {
                t.datetimepicker();
            } else {
                t.d.$widgetInput = $('<input/>').attr('type', t.d.type);
            }
            t.d.$widgetInputBox.ashow().empty();
            t.d.$widgetInput.attr(attributes).show();
            t.d.$widgetInput.appendTo(t.d.$widgetInputBox);
            t.d.$widgetInput.on('change keyup paste', function () {});
            setTimeout(function(){
                t.d.$widgetInput.on('change keyup paste', function () {
                    t.validate();
                    t.change();
                }).keypress(function(e) {
                    if (e.which == 13) {
                        t.enter();
                    }
                });
            }, 10);
            t.d.$widgetInput.click(function () {
                t.click();
            });
            if (t.d.type === 'hidden' && t.d.label.length < 1) {
                t.d.createFunctions.push(function () {
                    t.widget().ahide();
                });
            } else if (type === 'file') {
                t.d.createFunctions.push(function () {
                    $A.skin(t);
                });
            } else if (type === 'slider') {
                t.d.createFunctions.push(function () {
                    $A.skin(t);
                });
            }
            return t;
        }
        return t.d.type;
    };
    p.datepicker = function () {
        var t = this;
        if (!require.defined('jqueryUI')) {
            console.warn('Missing plugin!');
            return t;
        }
        t.d.isDatepicker = true;
        var $w = t.d.$widgetInput;

        var freturn = $w.datepicker.apply($w, arguments);
        return (freturn !== $w) ? freturn : t;
    };
    p.datetimepicker = function () {
        var t = this;
        if (!require.defined('jqueryUI', 'timepicker')) {
            console.warn('Missing plugin!');
            return t;
        }
        t.d.isDatetimepicker = true;
        var $w = t.d.$widgetInput;

        var freturn = $w.datetimepicker.apply($w, arguments);
        return (freturn !== $w) ? freturn : t;
    };
    p.timepicker = function () {
        var t = this;
        if (!require.defined('jqueryUI', 'timepicker')) {
            console.warn('Missing plugin!');
            return t;
        }
        t.d.isTimepicker = true;
        var $w = t.d.$widgetInput;

        var freturn = $w.timepicker.apply($w, arguments);
        return (freturn !== $w) ? freturn : t;
    };
    p.multiple = function (multiple) {
        var t = this;
        if (typeof multiple !== 'undefined') {
            multiple = $A.parseBoolean(multiple);
            if (multiple)
                t.d.$widgetInput.attr('multiple', 'multiple');
            else
                t.d.$widgetInput.removeAttr('multiple');
            t.d.multiple = multiple;
            return t;
        }
        t.d.$widgetInput.attr('multiple', 'multiple');
        t.d.multiple = true;

        return t.d.multiple;
    };
    p.multiselect = function () {
        var t = this;
        var args = arguments;
        if (typeof $().multiselect === "undefined") {
            console.warn('Missing plugin!');
            return t;
        }
        if (!t.d.hasObject) {
            t.d.createFunctions.push(function () {
                p.multiselect.apply(t, args);
                t.width(t.d.width);
            });
            return t;
        }
        t.d.multiselect = true;
        var $w = t.d.$widgetInput;
        setTimeout(function () {
            $w.multiselect('refresh');
        }, 1);
        if (args.length <= 0 || args[0] === true) {
            if (t.d.multiple) {
                args[0] = $A.d.defines.input.setupSelectSearchCheckObj;
            } else {
                args[0] = $A.d.defines.input.setupSelectObj;
            }
        }

        var freturn = $w.multiselect.apply($w, args);

        return (freturn !== $w) ? freturn : t;
    };

    p.options = p.items = function (arr) {
        var t = this;
        if (typeof arr !== 'undefined') {
            t.d.$widgetInput.find('option').remove();
            t.addItems(arr);
            return t;
        }
        return t.d.items;
    };

    p.addOptions = p.addItems = function (arr, before) {
        var t = this;
        var val = t.val();
        var before = before || false;
        if (t.d.type !== 'select') {
            console.warn('Bad type!');
        } else if (typeof arr === 'undefined') {
            console.warn('Bad parameters!');
        } else if (typeof arr === 'object' || typeof arr === 'array') {
            if (!$.isArray(arr)) {
                var na = [];
                for (var i in arr) {
                    na.push([i, arr[i]]);
                }
                arr = na;
            }
            if ($.isArray(arr)) {
                var values = [];
                for (var i = 0; i < arr.length; i++) {
                    var $option = $('<option></option>');

                    var value = arr[i];
                    if(typeof value !== 'string' && typeof value !== 'number'){
                        value = arr[i][0];
                    }

                    var text = arr[i];
                    if(typeof text !== 'string' && typeof text !== 'number'){
                        text = arr[i][1] || arr[i][0];
                    }

                    $option.attr('value', value);
                    $option.html(text);
                    if (typeof arr[i] !== 'string' && typeof arr[i] !== 'number' && typeof arr[i][2] !== 'undefined' && $A.parseBoolean(arr[i][2]))
                        values.push(arr[i][0]);
                    if (before) {
                        var $of = t.d.$widgetInput.find('option:first');
                        if ($of.val() == 0)
                            $option.insertAfter($of);
                        else
                            $option.prependTo(t.d.$widgetInput);
                    } else {
                        $option.appendTo(t.d.$widgetInput);
                    }
                    t.d.items[value] = text;
                }
                //t.d.$widgetInput.val(values);
            }
        }
        if (t.d.multiselect)
            t.multiselect('refresh');
        t.val(values || val);
        return t;
    };
    p.option = p.addOption = p.addItem = function (key, value) {
        var t = this;
        return t.addOptions([[key, (value || key)]]);
    };
    p.addOptionBefore = p.addItemBefore = function (key, value) {
        var t = this;
        return t.addOptions([[key, (value || key)]], true);
    };
    p.accept = function (arr) {
        var t = this;
        if (typeof arr !== 'undefined') {
            if (typeof arr === 'string') {
                t.d.accept = arr.split(',');
                t.d.$widgetInput.attr('accept', arr);
            } else {
                t.d.accept = arr;
                t.d.$widgetInput.attr('accept', arr.join(','));
            }
            return t;
        }
        return t.d.accept;
    };
    p.readonly = function (readonly) {
        var t = this;
        if (typeof readonly !== 'undefined') {
            readonly = $A.parseBoolean(readonly);
            t.d.readonly = readonly;
            t.d.$widgetInput.attr('readonly', readonly);
            return t;
        }
        return t.d.readonly;
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
    p.validator = function (validator) {
        var t = this;
        if (typeof validator !== 'undefined') {
            if (validator instanceof $A.m.Validator) {
                t.d.validator = validator;
            } else {
                t.d.validator.set(validator);
            }
            return t;
        }
        return t.d.validator;
    };
    p.validate = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.validate = func;
        } else {
            var a = t.validator().execute(t.val());
            if (!a) {
                t.d.$widgetInputBoxError.html(t.validator().errors().join('<br/>'));
                t.d.$widget.addClass('error');
            } else {
                t.d.$widget.removeClass('error');
            }
            t.d.validate.apply(this, [a, this, this.d.$widget]);
            return a;
        }
        return t;
    };

    p.breakInput = function (breakInput) {
        var t = this;
        if (typeof breakInput !== 'undefined') {
            breakInput = $A.parseBoolean(breakInput);
            t.d.breakInput = breakInput;
            if (breakInput) {
                t.d.$widgetInputBox.addClass('new-row');
            } else {
                t.d.$widgetInputBox.removeClass('new-row');
            }
            return t;
        }
        return t.d.breakInput;
    };
    p.click = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.click = func;
        } else {
            t.d.click.apply(this, [this, this.d.$widget]);
        }
        return t;
    };
    p.input = function () {
        var t = this;
        return t.d.$widgetInput;
    };
    p.errorBox = function () {
        var t = this;
        return t.d.$widgetInputBoxError;
    };

    $A.initBasicFunctions(Input, "Input");
})();

(function(){
    var Form = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<form class="automizy-form" onsubmit="return false;"></form>'),
            $inputs: $('<div class="automizy-form-inputs"></div>'),
            $buttons: $('<div class="automizy-form-buttons"></div>'),
            $tables: $('<div class="automizy-form-tables"></div>'),
            buttons: [],
            inputs: [],
            tables: [],
            subtitles: [],
            htmls: [],
            hasObject: false,
            id: 'automizy-form-' + $A.getUniqueString(),
            create: function () {
            },
            submit:function(){},
            method: 'POST',
            enctype: false,
            url: document.location.href
        };
        t.init();

        t.d.$widget.attr('id', t.id());
        t.d.$inputs.appendTo(t.d.$widget);
        t.d.$buttons.appendTo(t.d.$widget);
        t.d.$tables.appendTo(t.d.$widget);

        if (typeof obj !== 'undefined') {
            if (typeof obj.subTitle !== 'undefined')
                t.subTitle(obj.subTitle);
            if (typeof obj.htmls !== 'undefined')
                t.htmls(obj.htmls);
            if (typeof obj.inputs !== 'undefined')
                t.addInputs(obj.inputs);
            if (typeof obj.tables !== 'undefined')
                t.addTables(obj.tables);
            if (typeof obj.buttons !== 'undefined')
                t.addButtons(obj.buttons);
            if (typeof obj.groups !== 'undefined')
                t.groups(obj.groups);
            if (typeof obj.method !== 'undefined')
                t.method(obj.method);
            if (typeof obj.enctype !== 'undefined')
                t.enctype(obj.enctype);
            if (typeof obj.submit === 'function')
                t.submit(obj.submit);
            if (typeof obj.url !== 'undefined' || typeof obj.action !== 'undefined')
                t.url(obj.url || obj.action);
            t.initParameter(obj);
        }
    };

    var p = Form.prototype;
    p.subTitle = p.addSubTitle = function (text) {
        var t = this;
        var id = "automizy-form-subtitle-" + $A.getUniqueString();
        if (typeof text === 'string') {
            var $widget = $('<div id="' + id + '" class="automizy-form-subtitle"></div>');
            t.d.subtitles.push({id: id, text: text, $widget:$widget});
            $widget.html(text).appendTo(t.d.$inputs);
        } else {
            console.warn('Bad parameter type.', text);
        }
        return t;
    };
    p.removeSubTitle = function (subTitle) {
        var t = this;
        if (typeof subTitle === 'string') {
            for (var i = 0; i < t.d.subtitles.length; i++) {
                if (t.d.subtitles[i].id === subTitle)
                    t.d.subtitles[i].remove();
            }
        } else if (typeof subTitle === 'object') {
            subTitle.remove();
        }
    };

    p.button = p.addButton = function (obj) {
        var t = this;
        if (typeof obj !== 'undefined') {
            if (obj instanceof $A.m.Button) {
                obj.drawTo(t.d.$buttons);
                t.d.buttons.push(obj);
            } else {
                obj.target = obj.target || t.d.$buttons;
                var button = $A.newButton(obj);
                t.d.buttons.push(button);
            }
            return t;
        }
        var button = $A.newButton();
        t.d.buttons.push(button);
        button.drawTo(t.d.$buttons);
        return button;
    };
    p.removeButton = function (button) {
        var t = this;
        if (typeof button === 'string') {
            for (var i = 0; i < t.d.buttons.length; i++) {
                if (t.d.buttons[i].id() === button)
                    t.d.buttons[i].remove();
            }
        } else if (typeof button === 'object') {
            button.remove();
        }
    };
    p.addButtons = function (buttons) {
        var t = this;
        if (typeof buttons !== 'undefined') {
            for (var i = 0; i < buttons.length; i++) {
                t.addButton(buttons[i]);
            }
            return t;
        }
        return t.d.buttons;
    };
    
    p.input = p.addInput = function (obj) {
        var t = this;
        if (typeof obj !== 'undefined') {
            if (obj instanceof $A.m.Input) {
                obj.drawTo(t.d.$inputs);
                t.d.inputs.push(obj);
            } else {
                obj.target = obj.target || t.d.$inputs;
                var input = $A.newInput(obj);
                t.d.inputs.push(input);
            }
            return t;
        }
        var input = $A.newInput();
        t.d.inputs.push(input);
        input.drawTo(t.d.$inputs);
        return input;
    };
    p.removeInput = function (input) {
        var t = this;
        if (typeof input === 'string') {
            for (var i = 0; i < t.d.inputs.length; i++) {
                if (t.d.inputs[i].id() === input)
                    t.d.inputs[i].remove();
            }
        } else if (typeof input === 'object') {
            input.remove();
        }
    };
    p.addInputs = function (inputs) {
        var t = this;
        if (typeof inputs !== 'undefined') {
            for (var i = 0; i < inputs.length; i++) {
                t.addInput(inputs[i]);
            }
            return t;
        }
        return t.d.inputs;
    };
    
    p.table = p.addTable = function (obj) {
        var t = this;
        if (typeof obj !== 'undefined') {
            if (obj instanceof $A.m.Table) {
                obj.drawTo(t.d.$tables);
                t.d.tables.push(obj);
            } else {
                obj.target = obj.target || t.d.$tables;
                var table = $A.newTable(obj);
                t.d.tables.push(table);
            }
            return t;
        }
        var table = $A.newTable();
        t.d.tables.push(table);
        table.drawTo(t.d.$tables);
        return table;
    };
    p.removeTable = function (table) {
        var t = this;
        if (typeof table === 'string') {
            for (var i = 0; i < t.d.tables.length; i++) {
                if (t.d.tables[i].id() === table)
                    t.d.tables[i].remove();
            }
        } else if (typeof table === 'object') {
            table.remove();
        }
    };
    p.addTables = function (tables) {
        var t = this;
        if (typeof tables !== 'undefined') {
            for (var i = 0; i < tables.length; i++) {
                t.addTable(tables[i]);
            }
            return t;
        }
        return t.d.tables;
    };

    p.group = p.addGroup = function (obj) {
        var t = this;
        if (typeof obj === 'object' || typeof obj === 'array') {
            var $group = $('<div class="automizy-form-group"></div>');
            var $groupSwitch = $('<div class="automizy-form-group-switch"></div>').text(obj.text || $A.translate('Group')).click(function () {
                $groupSwitch.toggleClass('active');
                $group.toggleClass('active');
            });
            if (obj.width !== 'undefined')
                $groupSwitch.width(obj.width);
            if (typeof obj.inputs !== 'undefined') {
                for (var i = 0; i < obj.inputs.length; i++) {
                    if (obj.inputs[i] instanceof $A.m.Input) {
                        t.d.inputs.push(obj.inputs[i].drawTo($group));
                    } else {
                        obj.inputs[i].target = $group;
                        t.addInput(obj.inputs[i]);
                    }
                }
            }
            if (typeof obj.buttons !== 'undefined') {
                for (var i = 0; i < obj.buttons.length; i++) {
                    obj.buttons[i].target = $group;
                    t.addButton(obj.buttons[i]);
                }
            }
            $groupSwitch.appendTo(t.d.$inputs);
            $group.appendTo(t.d.$inputs);
        }
        return t;
    };
    p.removeGroup = function (group) {
        var t = this;
        if (typeof group === 'string') {
            for (var i = 0; i < t.d.groups.length; i++) {
                if (t.d.groups[i].id === group)
                    t.d.groups[i].remove();
            }
        } else if (typeof group === 'object') {
            group.remove();
        }
    };
    p.groups = p.addGroups = function (groups) {
        var t = this;
        if (typeof groups !== 'undefined') {
            for (var i in groups) {
                t.addGroup(groups[i]);
            }
            return t;
        }
        return t;
    };

    p.method = function (method) {
        var t = this;
        if (typeof method !== 'undefined') {
            t.d.method = method;
            t.widget().attr('method', method);
            return t;
        }
        return t.d.method;
    };
    p.enctype = function (enctype) {
        var t = this;
        if (typeof enctype !== 'undefined') {
            t.d.enctype = enctype;
            t.widget().attr('enctype', enctype);
            return t;
        }
        return t.d.enctype;
    };
    p.url = p.action = function (url) {
        var t = this;
        if (typeof url !== 'undefined') {
            t.d.url = url;
            t.widget().attr('action', url);
            return t;
        }
        return t.d.url;
    };
    p.submit = function (func) {
        var t = this;
        if(typeof func === 'function'){
            t.d.submit = func;
            return t;
        }
        t.d.submit.apply(t, []);
        t.widget().removeAttr('onsubmit').submit();
    };
    p.break = function () {
        var t = this;
        t.d.$inputs.append('<br/>');
        return t;
    };
    p.validate = function (){
        var t = this;
        var validate = true;
        for(var i = 0; i < t.d.inputs.length; i++){
            if(!t.d.inputs[i].validate()){
                validate = false;
            }
        }
        return validate;
    };

    p.htmls = p.addHtmls = function (htmls) {
        var t = this;
        if (typeof htmls !== 'undefined') {
            for (var i in htmls) {
                t.addHtml(htmls[i]);
            }
            return t;
        }
        return t.d.htmls;
    };

    p.html = p.addHtml = function (html) {
        var t = this;
        if (typeof html !== 'undefined') {
            var id = "automizy-form-html-" + $A.getUniqueString();
            var $htmlBox = $('<span id="' + id + '" class="automizy-form-html"></span>');
            if (html instanceof jQuery) {
                if (t.d.hasObject === false)
                    html.appendTo($htmlBox);
            } else {
                $htmlBox.html(html);
            }
            $htmlBox.appendTo(t.d.$inputs);
            t.d.htmls.push($htmlBox);
            return t;
        }
        return t.d.htmls;
    };
    p.removeHtml = function (html) {
        var t = this;
        if (typeof html === 'string') {
            for (var i = 0; i < t.d.htmls.length; i++) {
                if (t.d.htmls[i].attr('id') === html)
                    t.d.htmls[i].remove();
            }
        } else if (html instanceof jQuery) {
            html.remove();
        }
    };

    p.json = function () {
        return JSON.stringify(this.object());
    };

    p.object = function (dotted) {
        var t = this;

        var result = {};
        var ignoreArray = [];
        if(typeof dotted !== 'undefined'){
            dotted = $A.parseBoolean(dotted);
        }else{
            var dotted = false;
        }
        t.widget().find('input, select, textarea').filter(function(){
            var returnValue = true;
            var $input = $(this);
            if(!$input.attr('name')){
                returnValue = false;
            }else if($input.closest('.automizy-table-box').length > 0){
                returnValue = false;
            }
            return returnValue
        }).each(function () {
            var $t = $(this);
            if (typeof $t.data('originalValue') !== 'undefined' && $t.data('originalValue') == $t.val()) {
                ignoreArray.push($t.attr('name'));
            }

            if($t.is(':disabled')){
                return true;
            }
            var name = $t.attr('name');
            if($.inArray(name, ignoreArray) >= 0){
                return true;
            }
            var value = $t.val();

            if (dotted && name.indexOf('.') > -1) {
                var arr = name.split('.');
                if (typeof result[arr[0]] === 'undefined') {
                    result[arr[0]] = {};
                }
                result[arr[0]][arr[1]] = value;
            } else if (name.slice(-2) === '[]') {
                name = name.slice(0, -2);
                if (typeof result[name] === 'undefined')
                    result[name] = [];
                result[name].push(value);
            } else {
                result[name] = value;
            }

        });

        /*$.each(t.widget().serializeArray(), function () {
            var name = this.name;
            if($.inArray(name, ignoreArray) >= 0){
                return true;
            }
            var value = this.value;

            if (dotted && name.indexOf('.') > -1) {
                var arr = name.split('.');
                if (typeof result[arr[0]] === 'undefined') {
                    result[arr[0]] = {};
                }
                result[arr[0]][arr[1]] = value;
            } else if (name.slice(-2) === '[]') {
                name = name.slice(0, -2);
                if (typeof result[name] === 'undefined')
                    result[name] = [];
                result[name].push(value);
            } else {
                result[name] = value;
            }
        });*/

        return result;
    };

    $A.initBasicFunctions(Form, "Form");
})();

(function(){

    SlideWindow = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<div class="automizy-slide-window"></div>'),
            $head: $('<div class="automizy-slide-window-head"></div>'),
            $buttons: $('<div class="automizy-slide-window-buttons"></div>'),
            $content: $('<div class="automizy-slide-window-content"></div>'),
            $tab: $('<div class="automizy-slide-window-tab"></div>'),
            buttons: [],
            positionY: 'bottom',
            positionX: 'center',
            position: 'right',
            title: 'My SlideWindow',
            hash: '',
            tab: {
                text: 'Click this!',
                html: $('<span></span>'),
                width: 'auto',
                pos: 'right'
            },
            width: 600,
            zIndex: 3000,
            isOpened: false,
            isCloseable: true,
            autoClose: true,
            hasObject: false,
            id: 'automizy-slide-window-' + $A.getUniqueString(),
            animation: {
                open: 'swing',
                close: 'swing',
                openTime: 200,
                closeTime: 200
            },
            createFunctions: [],
            open: function () {
            },
            close: function () {
            },
            animationOpen: function () {
                var animation = {};
                switch (t.d.position) {
                    case "right":
                        animation = {right: 0};
                        break;
                    case "left":
                        animation = {left: 0};
                        break;
                    case "top":
                        animation = {top: 0};
                        break;
                    case "bottom":
                        animation = {bottom: 0};
                        break;
                    default:
                        animation = {right: -t.d.$widget.width()};
                        break;
                }
                return animation;
            },
            animationClose: function () {
                var animation = {};
                switch (t.d.position) {
                    case "right":
                        animation = {right: -t.d.$widget.outerWidth()};
                        break;
                    case "left":
                        animation = {left: -t.d.$widget.outerWidth()};
                        break;
                    case "top":
                        animation = {top: -t.d.$widget.outerHeight()};
                        break;
                    case "bottom":
                        animation = {bottom: -t.d.$widget.outerHeight()};
                        break;
                    default:
                        animation = {right: 0};
                        break;
                }
                return animation;
            }
        };
        t.init();

        t.d.$widget.attr('id', t.id());
        t.d.$tab.text(t.d.tab.text);
        t.d.$head.text(t.d.title);
        t.d.$tab.appendTo(t.d.$widget);
        t.d.$head.appendTo(t.d.$widget);
        t.d.$content.appendTo(t.d.$widget);
        t.d.$buttons.appendTo(t.d.$widget);
        t.d.$widget.css({visibility:'hidden'});
        t.d.createFunctions.push(function () {
            t.position(t.d.position);
            t.d.$widget.stop().animate(t.d.animationClose(), 0, 'swing', function(){
                t.d.$widget.css({visibility:'visible'});
            });
            t.show();
        });
        t.d.$tab.click(function () {
            if (t.d.isOpened === true) {
                t.close();
            } else {
                t.open();
            }
        });
        t.d.$widget.click(function () {
            if (t.d.autoClose === true)
                t.d.isCloseable = false;
        });
        $(window).click(function () {
            if (t.d.isCloseable === true && t.d.autoClose === true) {
                t.close();
            }
            t.d.isCloseable = true;
        });

        if (typeof obj !== 'undefined') {
            if (typeof obj.tab !== 'undefined')
                t.tab(obj.tab);
            if (typeof obj.title !== 'undefined')
                t.title(obj.title);
            if (typeof obj.position !== 'undefined')
                t.position(obj.position);
            if (typeof obj.positionY !== 'undefined')
                t.positionY(obj.positionY);
            if (typeof obj.positionX !== 'undefined')
                t.positionX(obj.positionX);
            if (typeof obj.width !== 'undefined')
                t.width(obj.width);
            if (typeof obj.zIndex !== 'undefined')
                t.zIndex(obj.zIndex);
            if (typeof obj.animation !== 'undefined')
                t.animation(obj.animation);
            if (typeof obj.open === 'function')
                t.open(obj.open);
            if (typeof obj.close === 'function')
                t.close(obj.close);
            if (typeof obj.autoClose !== 'undefined')
                t.autoClose(obj.autoClose);
            if (typeof obj.content !== 'undefined')
                t.content(obj.content);
            t.initParameter(obj);
        }
    };
    var p = SlideWindow.prototype;

    p.show = function (func) {
        var t = this;
        $A.setWindowScroll(false, this.d.id);
        if (!t.d.hasObject) {
            t.draw();
        }
        this.d.$widget.ashow();
        return this;
    };
    p.hash = function (hash) {
        var t = this;
        if (typeof hash !== 'undefined') {
            t.d.hash = hash;
            return t;
        }
        return t.d.hash;
    };
    p.close = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.close = func;
        } else {
            t.d.isOpened = false;
            t.d.$widget.stop().animate(t.d.animationClose(), t.d.animation.closeTime, t.d.animation.close, function () {
                t.d.close.apply(t, [t, t.d.$widget]);
            });
        }
        return t;
    };
    p.open = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.open = func;
        } else {
            t.d.isOpened = true;
            if (t.hash() !== false) {
                $A.hashChange(t.hash());
            }
            t.d.$widget.stop().animate(t.d.animationOpen(), t.d.animation.openTime, t.d.animation.open, function () {
                t.d.open.apply(t, [t, t.d.$widget]);
                t.show();
            });
        }
        return t;
    };
    p.autoClose = function (bool) {
        var t = this;
        if (typeof bool !== 'undefined') {
            t.d.autoClose = bool;
            return t;
        }
        return t.d.autoClose;
    };
    
    p.title = function (newTitle) {
        var t = this;
        if (typeof newTitle !== 'undefined') {
            t.d.title = newTitle;
            t.d.$head.html(newTitle);
            return t;
        }
        return t.d.title;
    };
    p.tab = function (tab) {
        var t = this;
        if (typeof tab === 'undefined')
            return t.d.tab;
        var tab = tab || {};
        t.d.tab.text = tab.text || t.d.tab.text;
        t.d.$tab.text(t.d.tab.text);
        t.d.tab.html = tab.html || t.d.tab.html;
        if(!t.d.tab.html instanceof jQuery){
            t.d.tab.html = $(t.d.tab.html);
        }
        t.d.tab.html.appendTo(t.d.$tab);
        return t;
    };

    p.tabPos = function (pos) {
        var t = this;
        if (typeof pos === 'undefined')
            return t.d.tab.pos;
        else {
            if (pos === 'right' || pos === 'left' || pos === 'center')
                t.d.tab.pos = pos;
            var hd = t.d.$tab.outerWidth();
            var hg = t.d.$tab.outerHeight();
            var halfWd = hd / 2;
            var halfHg = hg / 2;
            switch (t.d.position) {
                case 'right':
                    t.d.$tab.css({
                        left: -halfHg - halfWd,
                        top: (hd * 0.5) - (hg * 0.5) -(parseInt(t.widget().css('border-top-width')))
                    });
                    t.d.$content.css({'min-height': t.d.$tab.width() - t.d.$head.height() - t.d.$buttons.height()});
                    break;
                case 'left':
                    t.d.$tab.css({
                        left: -halfHg - halfWd + t.widget().outerWidth() + t.d.$tab.outerHeight() -parseInt(t.widget().css('border-right-width')) -parseInt(t.widget().css('border-left-width')),
                        top: (hd * 0.5) - (hg * 0.5) -(parseInt(t.widget().css('border-top-width')))
                    });
                    t.d.$content.css({'min-height': t.d.$tab.width() - t.d.$head.height() - t.d.$buttons.height()});
                    break;
                case 'bottom':
                    t.d.$tab.css({
                        top: -parseInt(t.d.$tab.outerHeight())
                    });
                    break;
                case 'top':
                    t.d.$tab.css({
                        top: t.d.$widget.outerHeight() -parseInt(t.widget().css('border-top-width'))
                    });
                    break;
            }
            switch (pos) {
                case 'center':
                    if (t.d.position === 'bottom' || t.d.position === 'top')
                        t.d.$tab.css({
                            left: (parseInt(t.d.$widget.outerWidth()) - parseInt(t.d.$tab.outerWidth())) / 2 -parseInt(t.widget().css('border-left-width'))
                        });
                    if (t.d.position === 'left' || t.d.position === 'right')
                        t.d.$tab.css({
                            top: ((t.d.$widget.outerHeight() - t.d.$tab.outerHeight()) / 2 -(parseInt(t.widget().css('border-top-width'))))
                        });
                    break;
                case 'right':
                    if (t.d.position === 'bottom' || t.d.position === 'top')
                        t.d.$tab.css({
                            left: t.widget().outerWidth() - t.d.$tab.outerWidth()
                        });
                    if (t.d.position === 'left' || t.d.position === 'right')
                        t.d.$tab.css({
                            top: (hd * 0.5) - (hg * 0.5) -(parseInt(t.widget().css('border-top-width')))
                        });
                    break;
                case 'left':
                    if (t.d.position === 'bottom' || t.d.position === 'top')
                        t.d.$tab.css({
                            left: -1
                        });
                    if (t.d.position === 'left' || t.d.position === 'right')
                        t.d.$tab.css({
                            top: t.widget().outerHeight() - t.d.$tab.outerWidth() / 2 - hg / 2
                        });
                    break;
            }
            return t;
        }
    };

    p.tabWidth = function (width) {
        var t = this;
        if (typeof width === 'undefined')
            return t.d.tab.width;
        t.d.tab.width = width;
        if (width === '100%') {
            if (t.d.position === 'left' || t.d.position === 'right') {
                t.d.$tab.css({'padding-left': (parseInt(t.d.$widget.outerHeight()) - t.d.$tab.width()) / 2 -parseInt(t.d.$tab.css('border-left-width'))+parseInt(t.widget().css('border-bottom-width'))});
                t.d.$tab.css({'padding-right': (parseInt(t.d.$widget.outerHeight()) - t.d.$tab.width()) / 2 -parseInt(t.d.$tab.css('border-right-width')+parseInt(t.widget().css('border-top-width')))});
            }
            else {
                t.d.$tab.css({'padding-left': (parseInt(t.d.$widget.outerWidth()) - t.d.$tab.width()) / 2 -parseInt(t.d.$tab.css('border-left-width'))});
                t.d.$tab.css({'padding-right': (parseInt(t.d.$widget.outerWidth()) - t.d.$tab.width()) / 2 -parseInt(t.d.$tab.css('border-right-width'))});
            }
            t.tabPos('center');
            t.d.tab.pos = 'center';
            return t;
        }
        if (width === 'auto') {
            t.d.$tab.css({padding: '3px 6px'});
            t.tabPos(t.d.tab.pos);
            return t;
        }
        else {
            width = parseInt(width);
            if (width < t.d.$tab.width()) {
                console.warn('Not wide enough! Min. width is:' + t.d.$tab.width());
            }
            else {
                t.d.$tab.css({'padding-left': (width - t.d.$tab.width()) / 2 -parseInt(t.d.$tab.css('border-left-width'))});
                t.d.$tab.css({'padding-right': (width - t.d.$tab.width() / 2 -parseInt(t.d.$tab.css('border-right-width')))});
                t.tabPos(t.d.tab.pos);
            }
            return t;
        }
    };
    p.content = function (content) {
        var t = this;
        if (typeof content !== 'undefined') {
            if (content instanceof jQuery) {
                content.appendTo(t.d.$content.html(''));
            } else if (content instanceof $A.m.Form) {
                content.drawTo(t.d.$content.html(''));
            } else {
                t.d.$content.html(content);
            }
            return t;
        }
        return t.d.$content;
    };
    p.positionY = function (y) {
        var t = this;
        if (t.d.position === "bottom" || t.d.position === "top") {
            console.warn("Only defined if slide window widget is positioned to the right or to the left.");
            if (typeof y !== 'undefined')
                return t;
        }
        if (typeof y !== 'undefined') {
            t.d.positionY = y;
            if (y === 'top')
                t.d.$widget.css({bottom:'auto', top:0});
            else if (y==='bottom')
                t.d.$widget.css({top:'auto', bottom:0});
            else if (y==='middle')
                t.widget().css({bottom: 'auto', top:(parseInt($('body').outerHeight()) - parseInt(t.widget().outerHeight()))/2});
            else
            t.d.$widget.css({'top': t.d.positionY});
            return t;
        }
        return t.d.positionY;
    };
    p.positionX = function (x) {
        var t = this;
        if (!(t.d.position === "bottom" || t.d.position === "top")) {
            console.warn("Only defined if slide window widget is positioned to the top or on the bottom.");
            if (typeof x !== 'undefined')
                return t;
        }
        if (typeof x !== 'undefined') {
            t.d.positionX = x;
            if (x === 'right')
                t.d.$widget.css({left:'auto', right:0});
            else if (x==='left')
                t.d.$widget.css({right:'auto', left:0});
            else if (x==='center')
                t.d.$widget.css({right: 'auto', left: ($('body').outerWidth() - t.d.$widget.width()) / 2});
            else
            t.d.$widget.css({'left': t.d.positionX});
            return t;
        }
        return t.d.positionX;
    };
    p.position = function (pos) {
        var t = this;
        if (typeof pos !== 'undefined') {
            if (pos === 'left' || pos === 'right' || pos === 'bottom' || pos === 'top'){
                t.d.$widget.removeClass('slideWindow-position-right');
                t.d.$widget.removeClass('slideWindow-position-left');
                t.d.$widget.removeClass('slideWindow-position-top');
                t.d.$widget.removeClass('slideWindow-position-bottom');
                t.d.position = pos;
                t.d.isOpened = false;
                t.d.isCloseable = true;
                switch (pos) {
                    case 'left':
                        t.d.$widget.addClass('slideWindow-position-left');
                        t.positionY(t.d.positionY);
                        t.d.positionX = -t.d.width;
                        t.d.$widget.css({left: t.d.positionX, right: 'auto', bottom: 'auto'});
                        t.tabWidth(t.d.tab.width);
                        break;
                    case 'right':
                        t.d.$widget.addClass('slideWindow-position-right');
                        t.positionY(t.d.positionY);
                        t.d.positionX = -t.d.width;
                        t.d.$widget.css({right: t.d.positionX, left: 'auto', bottom: 'auto'});
                        t.tabWidth(t.d.tab.width);
                        break;
                    case 'top':
                        t.d.$widget.addClass('slideWindow-position-top');
                        t.d.$widget.css({top: -t.d.$widget.outerHeight()});
                        t.d.positionX = ($('body').outerWidth() - t.d.$widget.width()) / 2;
                        t.d.$widget.css({bottom: 'auto'});
                        t.d.$widget.css({left: t.d.positionX});
                        t.tabWidth(t.d.tab.width);
                        t.d.$content.css({'min-height': 'auto'});
                        break;
                    case 'bottom':
                        t.d.$widget.addClass('slideWindow-position-bottom');
                        t.d.$widget.css({bottom: -t.d.$widget.outerHeight()});
                        t.positionX(t.d.positionX);
                        t.d.$widget.css({top: 'auto'});
                        t.d.$widget.css({left: t.d.positionX});
                        t.tabWidth(t.d.tab.width);
                        t.d.$content.css({'min-height': 'auto'});
                        break;
                }
                return t;
            }
            else
                console.warn("Only the following arguments are accepted: 'left' | 'right' | 'top' | 'bottom'.");
        }
        else
            return t.d.position;
    };
    p.width = function (width) {
        var t = this;
        if (typeof width !== 'undefined') {
            t.d.width = width;
            t.d.$widget.width(width);
            return t;
        }
        return t.d.width;
    };
    p.animation = function (animation) {
        var t = this;
        if (typeof animation !== 'undefined') {
            if (typeof animation === 'object' && animation.hasOwnProperty('open') && animation.hasOwnProperty('close') && animation.hasOwnProperty('openTime') && animation.hasOwnProperty('closeTime') && Object.keys(animation).length === 4) {
                animation.closeTime = parseInt(animation.closeTime);
                animation.openTime = parseInt(animation.openTime);
                this.d.animation = animation;
                return t;
            }
            else
                console.warn('Bad parameters!');
        } else
            return t.d.animation;
    };
    p.zIndex = function (zIndex) {
        var t = this;
        if (typeof zIndex !== 'undefined' && Number(zIndex) === zIndex && zIndex % 1 === 0) {
            t.d.zIndex = zIndex;
            t.d.$widget.css({zIndex: zIndex});
            return t;
        } else {
            console.warn('Bad parameter type.', zIndex);
        }
        return t.d.zIndex;
    };
    
    $A.initBasicFunctions(SlideWindow, "SlideWindow");
})();

(function(){
    var i18n = function (obj) {
        var t = this;
        t.d = {
            language: 'en_US',
            file: '',
            hasFile: true,
            missingTranslates:[],
            translate: {
                'Upload': 'UpLoad'
            }
        };

        if (typeof obj !== 'undefined') {
            if (typeof obj.language !== 'undefined')
                t.language(obj.language);
            if (typeof obj.file !== 'undefined')
                t.file(obj.file);
            if (typeof obj.setTranslate !== 'undefined')
                t.setTranslate(obj.setTranslate);
        }
    };

    p = i18n.prototype;
    p.language = function (lang) {
        var t = this;
        if (typeof lang === 'string') {
            t.d.language = lang;
            return t;
        }
        return t.d.language;
    };
    p.file = function (file) {
        var t = this;
        if (typeof file === 'string') {
            t.d.file = file;
            $.getScript(file).done(function (script, textStatus) {
                console.log('Automizy.i18n database rebuilt');
            }).fail(function (jqxhr, settings, exception) {
                console.warn('Automizy.i18n database rebuilding failed: ', exception);
            });
            return t;
        }
        return t.d.file;
    };
    p.setTranslate = function (obj) {
        var t = this;
        if (typeof obj !== 'undefined') {
            t.d.translate = obj;
        }
        return t;
    };
    p.getTranslate = function () {
        return this.d.translate;
    };
    p.translate = function (text) {
        var t = this;
        if (typeof t.d.translate[text] === 'undefined') {
            if ($A.d.settings.logTranslateMissings === true) {
                if($.inArray(text, t.d.missingTranslates) <= -1){
                    t.d.missingTranslates.push(text);
                    
                    function getErrorObject(){
                        try { throw Error('') } catch(err) { return err; }
                    }

                    var err = getErrorObject();
                    var callerLines = err.stack.split("\n");
                    var mainLine = callerLines[4];
                    for(var i = 0; i < callerLines.length; i++){
                        if(callerLines[i].substring(7, 19) === '$A.translate' || callerLines[i].substring(7, 16) === 'translate'){
                            mainLine = callerLines[i+1];
                        }
                    }
                    if(mainLine.slice(-1) === ')'){
                        var mainInfo = mainLine.substring(mainLine.indexOf('http'), mainLine.length-1);
                    }else{
                        var mainInfo = mainLine.substring(mainLine.indexOf('http'));
                    }
                    
                    console.warn('Missing translate: "' + text + '" - ' + mainInfo);
                }
            }
        } else {
            var text = t.d.translate[text];
        }
        for (var i = 1; i < arguments.length; i++) {
            text = text.replace("%s", arguments[i]);
        }
        return text;
    };

    $A.m.i18n = i18n;
    $A.d.i18n = new $A.m.i18n();
    $A.translate = function(){
        return $A.d.i18n.translate.apply($A.d.i18n, arguments);
    };
    $A.setTranslate = function(){
        return $A.d.i18n.setTranslate.apply($A.d.i18n, arguments);
    };
    $A.getTranslate = function(){
        return $A.d.i18n.getTranslate.apply($A.d.i18n, []);
    };
})();

(function(){
    var Table = function (obj) {
        var t = this;
        var d = $A.default.table;
        t.d = {
            $widget:$('<div class="automizy-table-box"></div>'),
            $tableContainerBox:$('<div class="automizy-table-container-box"></div>'),
            $tableContainer:$('<div class="automizy-table-container"></div>'),
            $table:  $('<table cellpadding="0" cellspacing="0" border="0" class="automizy-table collapsed"></table>'),
            $header:  $('<tr class="automizy-table-header"></tr>'),
            $title: $('<div class="automizy-table-title"></div>'),
            $actions: $('<div class="automizy-table-actions"></div>'),
            $buttons:  $('<div class="automizy-table-buttons"></div>'),
            $perPageBox: $('<div class="automizy-table-perpage-box"></div>'),
            perPageSelect:  $A.newInput(),

            $stepPageBox: $('<div class="automizy-table-steppage-box"></div>'),
            $stepFirst: $('<div class="automizy-table-stepfirst automizy-noselect"></div>'),
            $stepBack: $('<div class="automizy-table-stepback automizy-noselect"></div>'),
            $stepNext: $('<div class="automizy-table-stepnext automizy-noselect"></div>'),
            $stepLast: $('<div class="automizy-table-steplast automizy-noselect"></div>'),
            $pageBox: $('<div class="automizy-table-pagenumber-box"></div>'),
            $page: $('<input type="number" pattern="[0-9]*" class="automizy-table-pagenumber" value="1">'),
            $pageMax: $('<span class="automizy-table-pagenumber-max">1</span>'),

            $stepPageBoxBottom: $('<div class="automizy-table-steppage-box"></div>'),
            $stepFirstBottom: $('<div class="automizy-table-stepfirst automizy-noselect"></div>'),
            $stepBackBottom: $('<div class="automizy-table-stepback automizy-noselect"></div>'),
            $stepNextBottom: $('<div class="automizy-table-stepnext automizy-noselect"></div>'),
            $stepLastBottom: $('<div class="automizy-table-steplast automizy-noselect"></div>'),
            $pageBoxBottom: $('<div class="automizy-table-pagenumber-box"></div>'),
            $pageBottom: $('<input type="number" pattern="[0-9]*" class="automizy-table-pagenumber" value="1">'),
            $pageMaxBottom: $('<span class="automizy-table-pagenumber-max">1</span>'),

            $panel:$('<div class="automizy-table-panel automizy-noselect"></div>'),
            $settingsIcon: $('<div class="automizy-table-settings-icon automizy-noselect"></div>'),
            $settingsBox: $('<div class="automizy-table-settings-box"></div>'),
            $settingsBoxTitle: $('<div class="automizy-table-settings-box-title"></div>'),
            $settingsBoxContent: $('<form class="automizy-table-settings-box-content"></form>'),
            $searchIcon: $('<div class="automizy-table-search-icon automizy-noselect"></div>'),
            $searchBox: $('<div class="automizy-table-search-box"></div>'),
            $searchBoxContent: $('<div class="automizy-table-search-box-content"></div>'),
            $searchInput:$A.newInput(),
            $exportIcon: $('<div class="automizy-table-export-icon automizy-noselect"></div>'),
            $inlineButtons: $('<td class="automizy-table-inline-buttons"></td>'),
            $inlineButtonsBox: $('<tr class="automizy-table-inline-buttons-box"></tr>'),
            $checkboxCheckAll: $('<input type="checkbox" class="automizy-table-checkall" />'),
            $automizyTableBorderCss: $('<style></style>'),
            $loadingCellContent:$('<div class="automizy-table-loading-cell-content"></div>'),
            loadingCellContent:$A.translate('<b>Loading...</b>'),
            openedRow:false,
            buttons:  [],
            inlineButtons:[],
            title: '',
            border: 'none',
            perPage: 10,
            perPageList: [5, 10, 50, 100, 1000],
            perPageLabel: $A.translate('Results per page'),
            page: 1,
            pageMax: 1,
            searchValue:'',
            borderCollapse: true,
            settings:{
                cols:[]
            },
            orderBy:false,
            orderDir:'asc',
            hasObject:  false,
            selectable:false,
            exportable:true,
            openableInlineBox:true,
            storeData:false,
            id: 'automizy-table-' + $A.getUniqueString(),
            onPerPage: function(){},
            onPageFirst: function(){},
            onPagePrev: function(){},
            onPageNext: function(){},
            onPageLast: function(){},
            onSetPage: function(){},
            onSearch:function(){},
            onHideCol:function(){},
            onShowCol:function(){},
            onSort:function(){},
            onExport:function(){},
            beforeOpenInlineBox:function(){},
            stepFunction: function(){
                if(t.d.page <= 1){
                    t.d.$stepFirst.add(t.d.$stepBack).add(t.d.$stepFirstBottom).add(t.d.$stepBackBottom).stop().fadeTo(250, 0.5);
                }else{
                    t.d.$stepFirst.add(t.d.$stepBack).add(t.d.$stepFirstBottom).add(t.d.$stepBackBottom).stop().fadeTo(250, 1);
                }
                if(t.d.page >= t.d.pageMax){
                    t.d.$stepNext.add(t.d.$stepLast).add(t.d.$stepNextBottom).add(t.d.$stepLastBottom).stop().fadeTo(250, 0.5);
                }else{
                    t.d.$stepNext.add(t.d.$stepLast).add(t.d.$stepNextBottom).add(t.d.$stepLastBottom).stop().fadeTo(250, 1);
                }
                t.d.$page.add(t.d.$pageBottom).val(t.d.page);
            }
        };
        t.init();

        t.d.$stepFirst.add(t.d.$stepFirstBottom).append('<img src="'+$A.images.pageStepFirst+'" />').click(function(){
            if(t.d.page <= 1)return false;
            t.page(1);
            t.d.stepFunction();
            t.d.onPageFirst.apply(t, [t, t.d.$widget]);
        });
        t.d.$stepFirst.appendTo(t.d.$stepPageBox);
        t.d.$stepFirstBottom.appendTo(t.d.$stepPageBoxBottom);

        t.d.$stepBack.add(t.d.$stepBackBottom).append('<img src="'+$A.images.pageStepBack+'" />').click(function(){
            if(t.d.page <= 1)return false;
            t.page(Math.max(t.d.page-1, 1));
            t.d.stepFunction();
            t.d.onPagePrev.apply(t, [t, t.d.$widget]);
        });
        t.d.$stepBack.appendTo(t.d.$stepPageBox);
        t.d.$stepBackBottom.appendTo(t.d.$stepPageBoxBottom);

        t.d.$page.appendTo(t.d.$pageBox);
        t.d.$pageBottom.appendTo(t.d.$pageBoxBottom);

        t.d.$page.add(t.d.$pageBottom).attr({
            max:1,
            min:1
        }).keydown(function (e) {
            var $t = $(this);
            // Allow: backspace, delete, tab, escape and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 110, 190]) !== -1 ||
                    // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                    // Allow: Ctrl+C
                (e.keyCode == 67 && e.ctrlKey === true) ||
                    // Allow: Ctrl+X
                (e.keyCode == 88 && e.ctrlKey === true) ||
                    // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
            // Enter
            if(e.keyCode === 13){
                t.d.stepFunction();
                t.d.onSetPage.apply(t, [t, t.d.$widget]);
                $t.data('old-val', $t.val());
            }
        }).keyup(function() {
            var $t = $(this);
            var val = parseInt($t.val());
            var max = parseInt($t.attr('max'));
            var min = parseInt($t.attr('min'));
            if (isNaN(val)) {
                $t.val(min);
            }
            if (val > max) {
                $t.val(max);
            } else if (val < min) {
                $t.val(min);
            }
            t.d.page = parseInt($t.val());
        }).focus(function(){
            var $t = $(this);
            $t.data('old-val', $t.val());
        }).focusout(function(){
            var $t = $(this);
            if($t.data('old-val') != $t.val()) {
                t.d.stepFunction();
                t.d.onSetPage.apply(t, [t, t.d.$widget]);
            }
        }).on('mousewheel', function(e){
            e.preventDefault();
        });

        t.d.$pageBox.add(t.d.$pageBoxBottom).append('/');

        t.d.$pageMax.appendTo(t.d.$pageBox);
        t.d.$pageMaxBottom.appendTo(t.d.$pageBoxBottom);

        t.d.$pageBox.appendTo(t.d.$stepPageBox);
        t.d.$pageBoxBottom.appendTo(t.d.$stepPageBoxBottom);

        t.d.$stepNext.add(t.d.$stepNextBottom).append('<img src="'+$A.images.pageStepNext+'" />').click(function(){
            if(t.d.page >= t.d.pageMax)return false;
            t.page(Math.min(t.d.page+1, t.d.pageMax));
            t.d.stepFunction();
            t.d.onPageNext.apply(t, [t, t.d.$widget]);
        });
        t.d.$stepNext.appendTo(t.d.$stepPageBox);
        t.d.$stepNextBottom.appendTo(t.d.$stepPageBoxBottom);

        t.d.$stepLast.add(t.d.$stepLastBottom).append('<img src="'+$A.images.pageStepLast+'" />').click(function(){
            if(t.d.page >= t.d.pageMax)return false;
            t.page(t.d.pageMax);
            t.d.stepFunction();
            t.d.onPageLast.apply(t, [t, t.d.$widget]);
        });
        t.d.$stepLast.appendTo(t.d.$stepPageBox);
        t.d.$stepLastBottom.appendTo(t.d.$stepPageBoxBottom);

        t.d.$stepPageBox.appendTo(t.d.$actions);

        t.d.$perPageBox.appendTo(t.d.$actions);
        t.d.perPageSelect.type('select').multiple(false).multiselect(true).options(t.d.perPageList).val(t.d.perPage).label(t.d.perPageLabel).width('83px').change(function(){
            t.d.perPage = this.val();
            if(t.d.storeData){
                $A.store.set(t.id()+'PerPage', t.d.perPage);
            }
            t.d.onPerPage.apply(this, [t, t.d.$widget]);
        }).drawTo(t.d.$perPageBox);
        t.d.$widget.attr('id', t.id());
        t.d.$header.appendTo(t.d.$table);
        t.d.$title.html(t.d.title).appendTo(t.d.$widget);
        t.d.$actions.appendTo(t.d.$widget);
        t.d.$buttons.appendTo(t.d.$actions);
        t.d.$tableContainerBox.appendTo(t.d.$widget);
        t.d.$tableContainer.appendTo(t.d.$tableContainerBox);
        t.d.$table.appendTo(t.d.$tableContainer);
        t.d.$panel.appendTo(t.d.$tableContainerBox);
        t.d.$stepPageBoxBottom.appendTo(t.d.$widget);



        t.d.$settingsBox.appendTo(t.d.$panel).click(function(){
            t.d.settingsBoxCanClose = false;
        });
        t.d.$settingsBoxContent.appendTo(t.d.$settingsBox);
        t.d.$settingsBoxTitle.text($A.translate('Displayed columns')).appendTo(t.d.$settingsBoxContent);

        t.d.$searchBox.appendTo(t.d.$panel).click(function(){
            t.d.searchBoxCanClose = false;
        });
        t.d.$searchBoxContent.appendTo(t.d.$searchBox);
        t.d.$searchInput.placeholder($A.translate('Search in this list...')).enter(function(){
            t.d.searchValue = this.val();
            t.d.onSearch.apply(this, [t, t.d.$widget]);
            t.d.$searchBoxContent.stop().slideUp(250);
        }).drawTo(t.d.$searchBoxContent);

        setTimeout(function() {
            t.d.$settingsIcon.append('<img src="' + $A.images.settingsIcon + '" />').insertAfter(t.d.$settingsBox).click(function () {
                t.d.$settingsBoxContent.stop().slideToggle();
                t.d.settingsBoxCanClose = false;
            });
            t.d.$searchIcon.append('<img src="' + $A.images.searchIcon + '" />').insertAfter(t.d.$searchBox).click(function () {
                t.d.$searchBoxContent.stop().slideToggle();
                t.d.searchBoxCanClose = false;
                t.d.$searchInput.focus();
            });
            t.d.$exportIcon.append('<img src="' + $A.images.exportIcon + '" />').appendTo(t.d.$panel).click(function () {
                t.d.onExport.apply(t, [t, t.d.$widget]);
            });
        }, 1);



        $(window).click(function(){
            if(t.d.settingsBoxCanClose){
                t.d.$settingsBoxContent.stop().slideUp(250);
            }
            if(t.d.searchBoxCanClose){
                t.d.$searchBoxContent.stop().slideUp(250);
            }
            t.d.settingsBoxCanClose = true;
            t.d.searchBoxCanClose = true;
        });

        t.d.$searchBox.appendTo(t.d.$panel);
        t.d.$inlineButtons.appendTo(t.d.$inlineButtonsBox);
        t.d.$automizyTableBorderCss.appendTo('head:first');
        t.d.$checkboxCheckAll.change(function(){
            AutomizyJs.d.tableRowCheckBoxClick = true;
            var checked = this.checked;
            var cells = t.getColByIndex(0).$cells().find('input:enabled').prop('checked', checked);
        });
        t.border(t.d.border);
        t.borderCollapse(t.d.borderCollapse);
        var oSelectable = false;
        if(t.d.selectable) {
            t.d.selectable = false;
            oSelectable = true;
        }

        t.d.$loadingCellContent.html(t.d.loadingCellContent);

        if (typeof obj !== 'undefined') {
            if (obj instanceof HTMLElement) {
                obj = $(obj);
            }
            if (obj instanceof jQuery) {
                t.d.$widget = obj;
                if(obj.find('.automizy-table-title').length === 1)t.title(obj.find('.automizy-table-title').html());
                if(obj.find('.automizy-table th:first input').length === 1)t.d.selectable = true;
            } else {
                if (typeof obj.id !== 'undefined')
                    t.id(obj.id);
                if (typeof obj.storeData !== 'undefined')
                    t.storeData(obj.storeData);
                if (typeof obj.title !== 'undefined')
                    t.title(obj.title);
                if (typeof obj.border !== 'undefined')
                    t.border(obj.border || t.d.border);
                if (typeof obj.borderCollapse !== 'undefined')
                    t.borderCollapse(obj.borderCollapse);
                if (typeof obj.cols !== 'undefined')
                    t.cols(obj.cols);
                if (typeof obj.rows !== 'undefined')
                    t.rows(obj.rows);
                if (typeof obj.exportable !== 'undefined')
                    t.exportable(obj.exportable);
                if (typeof obj.selectable !== 'undefined')
                    setTimeout(function(){t.selectable(obj.selectable)}, 10);
                if (typeof obj.perPageList !== 'undefined')
                    t.perPageList(obj.perPageList);
                if (typeof obj.perPage !== 'undefined')
                    t.perPage(obj.perPage);
                if (typeof obj.perPageLabel !== 'undefined')
                    t.perPageLabel(obj.perPageLabel);
                if (typeof obj.page !== 'undefined')
                    t.page(obj.page);
                if (typeof obj.pageMax !== 'undefined')
                    t.pageMax(obj.pageMax);
                if (typeof obj.searchValue !== 'undefined')
                    t.searchValue(obj.searchValue);
                if (typeof obj.onPageFirst === 'function')
                    t.onPageFirst(obj.onPageFirst);
                if (typeof obj.onPagePrev === 'function')
                    t.onPagePrev(obj.onPagePrev);
                if (typeof obj.onPageNext === 'function')
                    t.onPageNext(obj.onPageNext);
                if (typeof obj.onPageLast === 'function')
                    t.onPageLast(obj.onPageLast);
                if (typeof obj.onSetPage === 'function')
                    t.onSetPage(obj.onSetPage);
                if (typeof obj.onSort === 'function')
                    t.onSort(obj.onSort);
                if (typeof obj.onPerPage === 'function')
                    t.onPerPage(obj.onPerPage);
                if (typeof obj.onShowCol === 'function')
                    t.onShowCol(obj.onShowCol);
                if (typeof obj.onExport === 'function')
                    t.onExport(obj.onExport);
                if (typeof obj.buttons !== 'undefined')
                    t.tableButtons(obj.buttons);
                if (typeof obj.inlineButtons !== 'undefined')
                    t.inlineButtons(obj.inlineButtons);
                if (typeof obj.openableInlineBox !== 'undefined')
                    t.openableInlineBox(obj.openableInlineBox);
                if (typeof obj.beforeOpenInlineBox === 'function')
                    t.beforeOpenInlineBox(obj.beforeOpenInlineBox);
                if (typeof obj.loadingCellContent !== 'undefined')
                    t.loadingCellContent(obj.loadingCellContent);
                t.initParameter(obj);

            }
        }

        if(oSelectable) {
            t.selectable(true);
        }
        t.d.stepFunction();
    };

    var p = Table.prototype;

    p.table = function () {
        return this.d.$table;
    };

    p.storeData = function(storeData){
        var t = this;
        if (typeof storeData !== 'undefined') {
            t.d.storeData = $A.parseBoolean(storeData);
            return t
        }
        return t.d.storeData;
    };

    p.onPageFirst = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onPageFirst = func;
        } else {
            t.d.stepFunction();
            if(t.d.hasObject)t.d.onPageFirst.apply(t, [t, t.d.$widget]);
        }
        return t;
    };
    p.onPagePrev = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onPagePrev = func;
        } else {
            t.d.stepFunction();
            if(t.d.hasObject)t.d.onPagePrev.apply(t, [t, t.d.$widget]);
        }
        return t;
    };
    p.onPageNext = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onPageNext = func;
        } else {
            t.d.stepFunction();
            if(t.d.hasObject)t.d.onPageNext.apply(t, [t, t.d.$widget]);
        }
        return t;
    };
    p.onPageLast = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onPageLast = func;
        } else {
            t.d.stepFunction();
            if(t.d.hasObject)t.d.onPageLast.apply(t, [t, t.d.$widget]);
        }
        return t;
    };
    p.onSetPage = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onSetPage = func;
        } else {
            t.d.stepFunction();
            if(t.d.hasObject)t.d.onSetPage.apply(t, [t, t.d.$widget]);
        }
        return t;
    };
    p.onPerPage = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onPerPage = func;
        } else {
            return t.d.onPerPage.apply(t, [t, t.d.$widget]);
        }
        return this;
    };
    p.onHideCol = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onHideCol = func;
        } else {
            return t.d.onHideCol.apply(t, [t, t.d.$widget]);
        }
        return this;
    };
    p.onShowCol = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onShowCol = func;
        } else {
            return t.d.onShowCol.apply(t, [t, t.d.$widget]);
        }
        return this;
    };
    p.onSort = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onSort = func;
        } else {
            if(t.d.hasObject)t.d.onSort.apply(t, [t, t.d.$widget]);
        }
        return t;
    };
    p.onExport = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.onExport = func;
        } else {
            if(t.d.hasObject)t.d.onExport.apply(t, [t, t.d.$widget]);
        }
        return t;
    };

    p.border = function(border){
        var t = this;
        if (typeof border !== 'undefined') {
            t.d.border = border;
            t.d.$automizyTableBorderCss.text('#'+t.id()+' .automizy-table, #'+t.id()+' .automizy-table td, #'+t.id()+' .automizy-table th{border: '+border+'}');
            return t;
        }
        return t.d.border;
    };
    //nem megy, mindig collapsed
    p.borderCollapse = function (borderCollapse) {
        var t = this;
        if (typeof borderCollapse !== 'undefined') {
            t.d.borderCollapse = $A.parseBoolean(borderCollapse);
            t.table().removeClass('collapsed');
            if(t.d.borderCollapse){
                t.table().addClass('collapsed');
            }
            return t;
        }
        return t.d.borderCollapse;
    };
    p.title = function (title) {
        var t = this;
        if (typeof title !== 'undefined') {
            t.d.title = title;
            t.d.$title.html(title);
            return t;
        }
        return t.d.title;
    };
    p.searchValue = function (searchValue) {
        var t = this;
        if (typeof searchValue !== 'undefined') {
            t.d.searchValue = searchValue;
            t.d.$searchInput.value(t.d.searchValue);
            return t;
        }
        return t.d.searchValue;
    };
    p.perPageList = function (perPageList) {
        var t = this;
        if (typeof perPageList !== 'undefined') {
            t.d.perPageList = perPageList;
            t.d.perPageSelect.options(perPageList);
            t.perPage(t.perPage());
            return t;
        }
        return t.d.perPageList;
    };
    p.perPage = function (perPage) {
        var t = this;
        if (typeof perPage !== 'undefined') {
            perPage = parseInt(perPage);
            if($.inArray(perPage, t.d.perPageList) < 0){
                perPage = t.d.perPageList[0] || 0;
            }
            t.d.perPage = perPage;
            t.d.perPageSelect.val(perPage);
            if(t.d.storeData){
                $A.store.set(t.id()+'PerPage', t.d.perPage);
            }
            if(t.d.hasObject)t.d.onPerPage.apply(t.d.perPageSelect, [t, t.d.$widget]);
            return t;
        }
        return t.d.perPage;
    };
    p.perPageLabel = function (perPageLabel) {
        var t = this;
        if (typeof perPageLabel !== 'undefined') {
            t.d.perPageLabel = perPageLabel;
            t.d.perPageSelect.label(perPageLabel);
            return t;
        }
        return t.d.perPageLabel;
    };
    p.page = function (page) {
        var t = this;
        if (typeof page !== 'undefined') {
            t.d.page = parseInt(page);
            t.d.$page.add(t.d.$pageBottom).val(t.d.page);
            return t;
        }
        return t.d.page;
    };
    p.pageMax = function (pageMax) {
        var t = this;
        if (typeof pageMax !== 'undefined') {
            t.d.pageMax = parseInt(pageMax);
            t.d.$pageMax.add(t.d.$pageMaxBottom).text($A.numberFormat(t.d.pageMax));
            t.d.$page.add(t.d.$pageBottom).attr('max', t.d.pageMax);
            return t;
        }
        return t.d.pageMax;
    };
    p.selectable = function (selectable) {
        var t = this;
        if (typeof selectable !== 'undefined') {
            var oSelectable = t.d.selectable;
            t.d.selectable = $A.parseBoolean(selectable);
            if(t.d.selectable && !oSelectable){
                t.table().addClass('checkboxed');
                var cbcagac = t.addCol({name:'checkbox-column', html:t.d.$checkboxCheckAll, index:0});
                cbcagac.$cells().eq(0).click(function(){
                    if(!AutomizyJs.d.tableRowCheckBoxClick){
                        $(this).find('input:first').each(function(){
                            this.checked = !this.checked;
                            $(this).trigger('change');
                        });
                    }
                    AutomizyJs.d.tableRowCheckBoxClick = false;
                });
                var $cbcagac = cbcagac.$cells().slice(1);
                $cbcagac.html(function(){
                    var id = $(this).closest('tr').data('recordId') || 0;
                    return $('<input type="checkbox" class="automizy-table-rowcheck" onClick="console.log(2)" value="'+id+'" />');
                }).click(function(){

                });
            }else if(!t.d.selectable && oSelectable){
                t.table().removeClass('checkboxed');
                t.deleteCol(0);
            }
            return t;
        }
        return t.d.selectable;
    };
    p.exportable = function (exportable) {
        var t = this;
        if (typeof exportable !== 'undefined') {
            t.d.exportable = $A.parseBoolean(exportable);
            if (exportable === false)
                t.d.$exportIcon.hide();
            return t;
        }
        return t.d.exportable;
    };
    p.openableInlineBox = function (openableInlineBox) {
        var t = this;
        if (typeof openableInlineBox !== 'undefined') {
            t.d.openableInlineBox = $A.parseBoolean(openableInlineBox);
            if (openableInlineBox===false)
                t.d.$inlineButtonsBox.hide();
            return t;
        }
        return t.d.openableInlineBox;
    };
    p.beforeOpenInlineBox = function (func) {
        var t = this;
        if (typeof func === 'function') {
            t.d.beforeOpenInlineBox = func;
            return this;
        }
        return this;
    };
    p.selectedRows = function(){
        var t = this;
        var rows = [];
        var ids = t.selectedIds();
        for(var i = 0; i < ids.length; i++){
            rows.push(t.getRowByRecordId(ids[i]));
        }
        return rows;
    };
    p.selectedRow = function(){
        var t = this;
        if (typeof t.selectedId()==='undefined')
            return false;
        return t.getRowByRecordId(t.selectedId());
    };
    p.selectedIds = function(){
        var t = this;
        return t.getColByIndex(0).$cells().find('input[type="checkbox"][value]:checked').map(function(){return this.value}).get()
    };
    p.selectedId = function(){
        var t = this;
        return t.getColByIndex(0).$cells().find('input[type="checkbox"][value]:checked:first').val();
    };
    p.openedRow = function(openedRow){
        var t = this;
        if (typeof openedRow !== 'undefined') {
            t.d.openedRow = openedRow;
            return t;
        }
        return t.d.openedRow;
    };
    
    p.openedId = function(){
        var t = this;
        if (t.d.openedRow!==false)
            return t.d.openedRow.recordId();
        return false;
    };

    p.getCell = function (colIndex, rowIndex) {
        var t = this;
        var $cell = t.table().find('tr:first').siblings().andSelf().eq(rowIndex).find('td, th').eq(colIndex);
        return $A.tableCell($cell);
    };
    
    
    
    p.getCells = function (type) {
        var t = this;
        var tableId = t.id();

        var type = type || 'Automizy';
        if (type === 'jQuery') {
            return t.table().find('th, td');
        } else {
            var tableDom = t.table()[0];
            var cells = [];
            for(var i = 0; i < tableDom.rows.length; i++){
                for(var j = 0; j < tableDom.rows[i].cells.length; j++){
                    var cell = tableDom.rows[i].cells[j];
                    if (type === 'DOM'){
                        cells.push(cell);
                    }else{
                        cells.push($A.tableCell(cell));
                    }
                }
            }
            return cells;
        }
    };
    p.$getCells = function () {
        return this.getCells('jQuery');
    };
    p.getDomCells = function () {
        return this.getCells('DOM');
    };
    
    
    
    p.getRowByIndex = function (index) {
        var $row = this.table().find('tr:first').siblings().andSelf().eq(index);
        if($row.length === 0){
            return false;
        }
        return $A.tableRow($row);
    };
    p.getRowByRecordId = function (recordId) {
        var t = this;
        var $row = t.table().find('tr:first').siblings().andSelf().filter(function(){
            return $(this).data('recordId') == recordId;
        });
        if($row.length === 0){
            return false;
        }
        return $A.tableRow($row);
    };
    p.getColByIndex = function (index) {
        var $col = this.table().find('th:first').siblings().andSelf().eq(index);
        if($col.length === 0){
            return false;
        }
        return $A.tableCol($col);
    };
    p.getColByName = function (name) {
        var t = this;
        var $col = t.table().find('th:first').siblings().andSelf().filter(function(){
            return $(this).data('name') == name;
        });
        if($col.length === 0){
            return false;
        }
        return $A.tableCol($col);
    };
    
    p.addCols = function (arr) {
        var t = this;
        if (!$.isArray(arr))
            return t.addCols([arr]);
        
        var table = t.table()[0];
        t.d.settings.cols = [];
        for(var i = 0; i < arr.length; i++){
            var obj = arr[i];
            var index = -1;
            if(typeof obj.index !== 'undefined'){
                index = parseInt(obj.index);
            }
            for (var j = 0; j < table.rows.length; j++) {
                var cell = table.rows[j].insertCell(index);

                var visibility = (obj.visibility === false)?false:true;
                if(t.d.storeData && typeof $A.store.get(t.id()+"ActiveCols") !== 'undefined'){
                    var activeCols = $A.store.get(t.id()+"ActiveCols");
                    if(typeof activeCols[obj.name] !== 'undefined') {
                        visibility = $A.parseBoolean(activeCols[obj.name]);
                    }
                }

                if(visibility === false){
                    cell.style.display = 'none';
                }
                if(j === 0){
                    var $cell = $(cell);
                    if(t.d.selectable && $cell.siblings().length <= 0){
                        $(table.rows[0].insertCell(0)).replaceWith(function(){
                            var $th = $("<th />");
                            t.d.$checkboxCheckAll.appendTo($th);
                            /*var th = $th[0];
                            th.automizyData = th.automizyData || {};
                            th.automizyData.name = 'automizyCheckboxCheckAll';*/
                            return $th;
                        });
                    }

                    if(typeof obj.name === 'undefined'){
                        obj.name = $A.getUniqueString();
                    }
                    if(obj.hideable !== false){

                        $A.input({
                            id:t.id()+'-settings-checkbox-'+obj.name,
                            type:'checkbox',
                            label:obj.text || obj.name,
                            name:obj.name,
                            labelPosition:'right',
                            checked:visibility,
                            target:t.d.$settingsBoxContent,
                            change:function(){
                                var name = this.name();
                                var col = t.getColByName(name);
                                if(!this.checked()){
                                    col.hide();
                                    t.d.onHideCol.apply(col, [t, t.widget()]);
                                }else{
                                    col.show();
                                    t.d.onShowCol.apply(col, [t, t.widget()]);
                                }
                                if(t.d.storeData){
                                    $A.store.set(t.id()+'ActiveCols', t.d.$settingsBoxContent.serializeObject(true));
                                }
                            }
                        });
                    }

                    $cell.replaceWith(function(){
                        var $th = $("<th />").append($(this).contents());
                        if(visibility === false){
                            $th.hide();
                        }
                        $th.data('name', obj.name);
                        var th = $th[0];
                        th.automizyData = th.automizyData || {};
                        th.automizyData.name = obj.name;

                        if (typeof obj.order !== 'undefined') {
                            t.d.orderBy = obj.name;
                            t.d.orderDir = obj.order;
                        }
                        if(typeof obj.text !== 'undefined'){
                            $th.append(obj.text);
                        }
                        if(typeof obj.html !== 'undefined'){
                            if(obj.html instanceof jQuery){
                                obj.html.appendTo($th);
                            }else{
                                $th.append(obj.html);
                            }
                        }
                        if(obj.sortable !== false) {
                            var $sort = $('<span class="automizy-table-sort-arrow automizy-noselect"></span>');

                            $th.click(function(){
                                var $thth = $(this);
                                $thth.siblings().find('.automizy-table-sort-arrow').removeClass('asc desc');
                                var thObj = t.d.settings.cols.filter(function ( elem ) {return elem.name === $thth.data('name');})[0];
                                if(thObj.order === 'asc'){
                                    thObj.order = 'desc';
                                    $sort.switchClass( "asc", "desc", 250, "linear" );
                                }else{
                                    thObj.order = 'asc';
                                    $sort.switchClass( "desc", "asc", 250, "linear" );
                                }
                                t.d.orderBy = thObj.name;
                                t.d.orderDir = thObj.order;
                                t.d.onSort.apply(thObj, [t, t.d.$widget]);
                            });

                            if (typeof obj.order !== 'undefined') {
                                $sort.addClass(obj.order);
                            }
                            $sort.appendTo($th);
                        }

                        obj.col = $A.tableCol($th);
                        t.d.settings.cols.push(obj);
                        return $th;
                    });
                }
            }
        }
        return t;
    };
    p.addCol = function (obj) {
        var t = this;
        if (typeof obj === 'undefined') {
            return $A.newTableCol();
        }
        obj.table = obj.table || t;
        obj.newCol = true;
        return $A.tableCol(obj);
    };
    p.cols = function(arr){
        var t = this;
        if (typeof arr === 'undefined') {
            var cols = [];
            this.table().find('th:first').siblings().andSelf().each(function(){
                cols.push($A.tableCol($(this)));
            })
            return cols;
        }
        t.deleteCols();
        return t.addCols(arr);
    };
    p.deleteCols = function(arr){
        var t = this;
        var table = t.table()[0];
        if (typeof arr !== 'undefined'){
            var sortArr = arr.sort();
            for (var i = 0; i < table.rows.length; i++) {
                for (var j = sortArr.length - 1; j >= 0; j--) {
                    if(i === 0){
                        $A.input('table-settings-checkbox-'+$(table.rows[i].cells[j]).attr('name')).remove();
                    }
                    table.rows[i].deleteCell(sortArr[j]);
                }
            }
            return t;
        }

        var cols = t.cols();
        for(var i = 0; i < cols.length; i++){
            $A.input(t.id()+'-settings-checkbox-'+cols[i].name()).remove();
        }
        $A.input(t.id()+'-settings-checkbox-'+$(table.rows[i].cells[j]).attr('name')).remove();
        var lastCol = table.rows[0].cells.length - 1;
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = lastCol; j > 0; j--) {
                table.rows[i].deleteCell(j);
            }
        }
        return t;
    };
    p.deleteCol = function(index){
        var t = this;
        return t.deleteCols([index]);
    };
    
    p.addRows = function (arr) {
        var t = this;
        if (!$.isArray(arr)){
            return t.addRows([arr]);
        }
        
        var table = t.table()[0];
        for(var i = 0; i < arr.length; i++){
            var recordId = 0;
            var rowArr = arr[i];
            var rowIndex = table.rows.length;
            if (!$.isArray(arr[i])){
                if(typeof rowArr.index !== 'undefined'){
                    rowIndex = parseInt(rowArr.index);
                    if(rowIndex < 1)rowIndex = 1;
                }
                recordId = rowArr.recordId || recordId;
                rowArr = rowArr.values || [];
            }
            var row = table.insertRow(rowIndex);
            $(row).data('recordId', recordId).click(function(){
                var $t = $(this);
                setTimeout(function(){
                    if(!t.d.isCheckboxClick) {
                        t.openedRow($A.tableRow($t));
                        t.d.beforeOpenInlineBox.apply($t, [t.openedRow(), t.d.openedRow.recordId()]);
                        if (t.d.openableInlineBox) {
                            t.d.$inlineButtons.attr('colspan', t.table()[0].rows[0].cells.length - t.table().find('tr:first th:not(:visible)').length);
                            t.d.$inlineButtonsBox.insertAfter($t);
                            t.d.$inlineButtonsBox.show();
                        }
                    }
                    t.d.isCheckboxClick = false;
                }, 10);
            });

            if (!$.isArray(rowArr)){
                var newArr = [];
                for (var j = t.d.selectable?1:0; j < table.rows[0].cells.length; j++) {
                    var ad = table.rows[0].cells[j].automizyData;
                    if(typeof ad === 'undefined'){
                        ad = {};
                    }
                    var a = rowArr[ad.name];
                    newArr.push((typeof a !== 'undefined')?a:'');
                }
                rowArr = newArr;
            }

            if(t.d.selectable){
                rowArr.unshift({
                    html:'<input type="checkbox" class="automizy-table-rowcheck" onClick="AutomizyJs.d.tableRowCheckBoxClick = true" value="'+recordId+'" />',
                    click:function () {
                        t.d.isCheckboxClick = true;
                        if(!AutomizyJs.d.tableRowCheckBoxClick){
                            $(this).find('input:first').each(function(){
                                this.checked = !this.checked;
                                $(this).trigger('change');
                            });
                        }
                        AutomizyJs.d.tableRowCheckBoxClick = false;
                    }
                });
            }
            for (var j = 0; j < table.rows[0].cells.length; j++) {
                var cell = row.insertCell(j);

                var value = rowArr[j];
                if(typeof value === 'undefined'){
                    value = '';
                }
                if (value instanceof $A.m.Input) {
                    value.drawTo($(cell));
                }else if(value instanceof jQuery){
                    value.appendTo($(cell));
                }else if(value !== null && typeof value === 'object'){
                    if(typeof value.html !== 'undefined'){
                        cell.innerHTML = value.html;
                    }
                    if(typeof value.text !== 'undefined'){
                        cell.textContent = value.text;
                    }
                    cell.onclick = value.click || function(){};
                }else{
                    cell.textContent = value;
                }

                var jMod = t.d.selectable ? j-1 : j;
                if(typeof t.d.settings.cols[jMod] !== 'undefined'){
                    if(typeof t.d.settings.cols[jMod].cellFunction === 'function') {
                        t.d.settings.cols[jMod].cellFunction.apply(cell, [cell, value]);
                    }
                }

                if(table.rows[0].cells[j].style.display === 'none'){
                    cell.style.display = 'none'
                }
            }
        }
        return t;
    };
    p.addRow = function (arr) {
        var t = this;
        if (typeof arr === 'undefined') {
            return $A.newTableRow();
        } else if (typeof arr === 'object' || typeof arr === 'array') {
            return t.addRows(arr);
        }
        return t;
    };
    p.rows = function(arr){
        var t = this;
        if (typeof arr === 'undefined') {
            var rows = [];
            this.table().find('tr:first').siblings().andSelf().each(function(){
                rows.push($A.tableRow($(this)));
            });
            return rows;
        }
        t.deleteRows();
        return t.addRows(arr);
    };
    p.rowCount = function(){
        return this.rows().length-1;
    };
    p.deleteRows = function(arr){
        var t = this;
        var table = t.table()[0];
        if (typeof arr !== 'undefined'){
            var sortArr = arr.sort();
            for (var i = sortArr.length - 1; i >= 0; i--) {
                table.deleteRow(sortArr[i]);
            }
            return t;
        }
        
        var lastRow = table.rows.length - 1;
        for (var i = lastRow; i > 0; i--) {
            table.deleteRow(i);
        }
        return t;
    };
    p.deleteRow = function(index){
        var t = this;
        return t.deleteRows([index]);
    };

    p.setButtonsStatus = function(){
        var t = this;
        var buttons = t.buttons();
        for(var i = 0; i < buttons.length; i++){
            var button = buttons[i];
            if(button.data('condition') !== 'undefined'){
                var condition = button.data('condition');
                if(condition === 'select-one'){
                    if(t.selectedIds().length === 1){
                        button.enable();
                    }else{
                        button.disable();
                    }
                }else if(condition === 'select-more-than-zero'){
                    if(t.selectedIds().length >= 1){
                        button.enable();
                    }else{
                        button.disable();
                    }
                }else if(condition === 'select-between-two-and-four'){
                    if(t.selectedIds().length >= 2 && t.selectedIds().length <= 4){
                        button.enable();
                    }else{
                        button.disable();
                    }
                }
            }
        }
        return t;
    };

    p.tableButtons = function(arr){
        var t = this;
        if (typeof arr === 'undefined')
            return t.d.buttons;
        for(var i = 0; i < arr.length; i++){
            if(arr[i].condition !== 'undefined'){
                arr[i].data = arr[i].data || {};
                arr[i].data.condition = arr[i].condition;
            }
        }
        t.buttons(arr);
        t.table().on('change', 'input.automizy-table-rowcheck, input.automizy-table-checkall', function(){
            t.setButtonsStatus();
        });
        return t;
    };
    p.inlineButtons = function(inlineButtons){
        var t = this;
        if(typeof inlineButtons !== 'undefined'){
            t.d.inlineButtons = inlineButtons;
            for(var i = 0; i < inlineButtons.length; i++){
                var inlineButton = inlineButtons[i];
                $('<a>'+inlineButton.text+'</a>').data('click', inlineButton.click || function(){}).click(function(){
                    var $t = $(this);
                    var $row = $t.closest('tr').prev();
                    var row = $A.tableRow($row);
                    t.openedRow(row);
                    $t.data('click').apply(row, [t, t.d.$widget]);
                }).appendTo(t.d.$inlineButtons);
            }
            return t;
        }
        return t.d.inlineButtons;
    };
    p.loading = function(){
        var t = this;
        if(t.table().find('tr.automizy-table-loading-row').length > 0){
            return t;
        }
        setTimeout(function(){
            t.deleteRows();
            t.setButtonsStatus();
            var $tr = $('<tr class="automizy-table-loading-row"></tr>');
            var $td = $('<td colspan="'+t.getRowByIndex(0).$cells().length+'"></td>').appendTo($tr);
            t.d.$loadingCellContent.appendTo($td);
            $tr.appendTo(t.table());
        }, 10);
        return t;
    };
    p.loadingCellContent = function(loadingCellContent){
        var t = this;
        if (typeof loadingCellContent !== 'undefined') {
            if (loadingCellContent instanceof jQuery) {
                var loadingCellContent = loadingCellContent.clone();
            }
            t.d.loadingCellContent = loadingCellContent;
            t.d.$loadingCellContent.html(loadingCellContent);
            return t;
        }
        return t.d.loadingCellContent;
    };

    $A.initBasicFunctions(Table, "Table");

})();

(function(){
    var TableRow = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<tr class="automizy-table-row"></tr>'),
            table:false,
            hasObject: false
        };
        t.init();

        if (typeof obj !== 'undefined') {
            if (obj instanceof HTMLElement) {
                obj = $(obj);
            }
            if (obj instanceof jQuery) {
                t.d.hasObject = true;
                t.d.$widget = obj;
                t.index(obj.index());
                t.d.table = $A.table(t.widget().closest('.automizy-table-box'));
                if(typeof obj.data('recordId') !== 'undefined')t.recordId(obj.data('recordId'));
                if(typeof obj.attr('id') !== 'undefined')t.id(obj.attr('id'));
            } else {
                if (typeof obj.index !== 'undefined')
                    t.index(obj.index);
                if (typeof obj.table !== 'undefined')
                    t.table(obj.table);
                if (typeof obj.recordId !== 'undefined')
                    t.recordId(obj.recordId);
                t.initParameter(obj);
            }
        }
    };
    var p = TableRow.prototype;
    
    p.table = function (table) {
        var t = this;
        if (typeof table !== 'undefined') {
            t.d.table = table;
            var rowIndex = t.d.index;
            var trs = t.d.table.table().find('tr:first').siblings().andSelf();
            var id = trs.eq(rowIndex).attr('id') || 0;
            
            if(typeof $A.getTableRow(id) === 'undefined'){
                t.$widget().insertBefore(trs.eq(rowIndex));
            }
            return t;
        }
        if (!t.d.table) {
            t.d.table = $A.table(t.widget().closest('.automizy-table-box'));
        }
        return t.d.table;
    };
    p.index = function () {
        return this.widget().index();
    };
    p.recordId = function () {
        return this.widget().data('id') || this.widget().data('recordId') || this.widget().find('td:first input').val() || 0;
    };

    p.$checkbox = function(){
        return this.d.$widget.find('.automizy-table-rowcheck:first');
    };
    p.getCellByColName = function(name){
        var t = this;
        if(typeof name === 'undefined'){
            return false;
        }
        var cells = t.cells();
        for(var i = 0; i < cells.length; i++){
            if(cells[i].col().name() == name){
                cell = cells[i];
                break;
            }
        }
        return cell || false;
    }
    
    p.cells = function (type) {
        var t = this;
        var table = t.table();
        var tableId = table.id();
        var index = t.index();
        var colCount = table.table()[0].rows[0].cells.length;

        var type = type || 'Automizy';
        if (type === 'jQuery') {
            return t.widget().find('th, td');
        } else if (type === 'DOM') {
            return table.table()[0].rows[index].cells;
        }

        var aCells = [];
        for (var i = 0; i < colCount; i++) {
            var cell = table.table()[0].rows[index].cells[i];
            aCells.push($A.tableCell(cell));
        }
        return aCells;
    };
    p.$cells = function () {
        return this.cells('jQuery');
    };
    p.domCells = function () {
        return this.cells('DOM');
    };
    
    $A.initBasicFunctions(TableRow, "TableRow");

})();

(function(){
    var TableCol = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<th class="automizy-table-col"></th>'),
            table: false,
            hasObject: false,
            newCol: false,
            html:'',
            text:'',
            active:true
        };
        t.init();

        if (typeof obj !== 'undefined') {
            if (obj instanceof HTMLElement) {
                obj = $(obj);
            }
            if (obj instanceof jQuery) {
                t.d.hasObject = true;
                t.d.$widget = obj;
                t.d.index = obj.index();
                t.d.text = obj.text();
                t.d.html = obj.html();
                t.d.active = obj.css('display') !== 'none';
                //t.d.table = $A.table(t.widget().closest('.automizy-table-box'));
                if(typeof obj.data('name') !== 'undefined')t.name(obj.data('name'));
                if(typeof obj.attr('id') !== 'undefined')t.id(obj.attr('id'));
            } else {
                if (typeof obj.newCol !== 'undefined')
                    t.d.newCol = obj.newCol;
                if (typeof obj.index !== 'undefined')
                    t.index(obj.index);
                if (typeof obj.table !== 'undefined')
                    t.table(obj.table);
                if (typeof obj.name !== 'undefined')
                    t.name(obj.name);
                if (typeof obj.html !== 'undefined')
                    t.html(obj.html);
                if (typeof obj.text !== 'undefined')
                    t.text(obj.text);
                if (typeof obj.active !== 'undefined')
                    t.active(obj.active);
                t.initParameter(obj);
            }
        }
    };
    var p = TableCol.prototype;

    p.table = function (table) {
        var t = this;
        if (typeof table !== 'undefined') {
            t.d.table = table;
            var colIndex = t.d.index;
            var $cols = t.d.table.table().find('th, td').eq(0).siblings().andSelf();
            var colLen = $cols.length;
            var id = $cols.eq(colIndex).attr('id') || 0;
            
            //if(typeof $A.getTableCol(id) === 'undefined'){
            if(t.d.newCol){
                t.$cells().each(function (index) {
                    var $this = $(this);
                    var $clone = $this.clone().empty().removeAttr('id');
                    var $row = $this.closest('tr');
                    if(index === 0){
                        t.d.$widget = $clone;
                        t.d.$widget.attr('id', t.id());
                    }
                    if(colIndex >= colLen){
                        $clone.insertAfter($row.find('th, td').eq(colLen - 1));
                    }
                    else{
                        if(colIndex < 0){
                            colIndex = 0;
                        }
                        $clone.insertBefore($row.find('th, td').eq(colIndex));
                    }
                });
            }
            return t;
        }
        if (!t.d.table) {
            t.d.table = $A.table(t.widget().closest('.automizy-table-box'));
        }
        return t.d.table;
    };
    p.index = function (index) {
        var t = this;
        if (typeof index !== 'undefined') {
            if (t.d.hasObject) {
                t.$cells().each(function () {
                    var $this = $(this);
                    var row = $this.closest('tr');
                    $this.insertBefore(row.find('th, td').eq(index));
                })
            }
            t.d.index = index;
            return t;
        }
        t.d.index = t.widget().index();
        return t.d.index;
    };
    p.text = function (text) {
        var t = this;
        if (typeof text !== 'undefined') {
            t.d.text = text;
            t.d.$widget.text(text);
            t.d.html=text;
            t.d.$widget.html(text);
            return t;
        }
        return t.d.text;
    };
    p.html = function (html) {
        var t = this;
        if (typeof html !== 'undefined') {
            t.d.html = html;
            t.d.$widget.html(html);
            t.d.text=t.d.$widget.text();
            return t;
        }
        return t.d.html;
    };
    p.name = function (name) {
        var t = this;
        if (typeof name !== 'undefined') {
            t.d.name = name;
            t.d.$widget.data('name', name);
            return t;
        }
        return t.d.name;
    };
    p.active = function (active) {
        var t = this;
        if (typeof active !== 'undefined') {
            t.d.active = $A.parseBoolean(active);
            if(t.d.active){
                t.show();
            }else{
                t.hide();
            }
            return t;
        }
        return t.d.active;
    };
    p.cells = function (type) {
        var t = this;
        var table = t.table();
        var tableId = table.id();
        var rowCount = table.table()[0].rows.length;
        var index = t.index();

        var type = type || 'Automizy';
        if (type === 'jQuery') {
            return table.table().find('th:nth-child(' + (index + 1) + '), td:nth-child(' + (index + 1) + ')');
        } else if (type === 'DOM') {
            var cells = [];
            var rows = table.table()[0].rows;
            for(var i = 0; i < rows.length; i++){
                cells.push(rows[i].cells[index]);
            }
            return cells;
            //return table.table()[0].rows[i].cells;
        }

        var aCells = [];
        for (var i = 0; i < rowCount; i++) {
            var cell = table.table()[0].rows[i].cells[index];
            aCells.push($A.tableCell(cell));
        }
        return aCells;
    };
    p.$cells = function () {
        return this.cells('jQuery');
    };
    p.domCells = function () {
        return this.cells('DOM');
    };

    p.hide = function(){
        this.$cells().hide();
        this.d.active = false;
        return this;
    };
    p.show = function(){
        this.$cells().show();
        this.d.active = true;
        return this;
    };
    p.remove = function () {
        this.$cells().remove();
        delete $A.d["tablecols"][this.id()];
        return true;
    };

    $A.initBasicFunctions(TableCol, "TableCol");

})();

(function(){
    var TableCell = function (obj) {
        var t = this;
        t.d = {
            $widget: $('<td class="automizy-table-cell"></td>'),
            hasObject: false
        };
        t.init();
        
        if (typeof obj !== 'undefined') {
            if (obj instanceof HTMLElement) {
                obj = $(obj);
            }
            if (obj instanceof jQuery) {
                t.d.hasObject = true;
                t.d.$widget = obj;
                t.d.html = obj.html();
                t.d.text = obj.text();
                t.d.table = $A.table(t.widget().closest('.automizy-table-box'));
            } else {
                if (typeof obj.index !== 'undefined')
                    t.index(obj.index);
                if (typeof obj.table !== 'undefined')
                    t.table(obj.table);
                if (typeof obj.recordId !== 'undefined')
                    t.recordId(obj.recordId);
                t.initParameter(obj);
            }
        }
    };
    var p = TableCell.prototype;

    p.table = function () {
        var $table = this.widget().closest('table');
        if($table.hasClass('automizy-table')){
            return $A.getTable($table.closest('.automizy-table-box').attr('id')) || $table;
        }
        return $table;
    };
    
    p.row = function () {
        return $A.tableRow(this.table().table().find('tr:first').siblings().andSelf().eq(this.widget().parent().index()));
    };
    p.col = function () {
        return $A.tableCol(this.table().table().find('th, td').eq(0).siblings().andSelf().eq(this.widget().index()));
    };
    p.index = function () {
        return [this.col().index(), this.row().index()];
    };
    p.recordId = function () {
        return this.row().recordId();
    };
    p.text = function (text) {
        var t = this;
        if (typeof text !== 'undefined') {
            t.d.text = text;
            t.d.$widget.text(text);
            t.d.html=text;
            t.d.$widget.html(text);
            return t;
        }
        return t.d.text;
    };
    p.html = function (html) {
        var t = this;
        if (typeof html !== 'undefined') {
            t.d.html = html;
            t.d.$widget.html(html);
            t.d.text=t.d.$widget.text();
            return t;
        }
        return t.d.html;
    };
    
    $A.initBasicFunctions(TableCell, "TableCell");

})();

(function(){
    if (!Date.now) {
        Date.now = function () {
            return new Date().getTime();
        };
    }
    if (!Date.timestamp) {
        Date.timestamp = function () {
            return Math.floor(Date.now() / 1000);
        };
    }
})();

(function(){
    var isChangeManually = false;
    $A.hashChange = function (hash, add) {
        if(typeof hash === 'undefined'){
            $(window).trigger('hashchange');
            return true;
        }
        if(typeof add === 'undefined'){
            var add = true;
        }else{
            var add = $A.parseBoolean(add);
        }
        if(add){
            $A.d.hashes.push(hash);
        }else{
            $A.d.hashes.remove(hash);
            hash = $A.d.hashes[$A.d.hashes.length - 1] || '';
        }
        isChangeManually = true;
        window.location.hash = hash;
        setTimeout(function(){
            isChangeManually = false;
        }, 10)
    };
    
    $(window).on('hashchange', function() {
        if(!isChangeManually){
            var hash = window.location.hash;
            if(hash.charAt(0) === '#')
                hash = hash.slice(1);
            $A.hashChange(hash);
        }
    });
})();

(function(){
    $A.getFunctionStringFromArray = function (f, args) {
        var len = args.length;
        f += '(';
        for(var i = 0; i < len; i++){
            f += 'arguments['+i+']';
            if(i < len-1)f += ', ';
        }
        f += ')';
        return f;
    };
})();

(function(){
    $A.insertAtCaret = function(input,text) {
        var txtarea = input;
        if(txtarea instanceof jQuery)txtarea = txtarea[0];
        if(txtarea instanceof $A.m.Input)txtarea = txtarea.input();
        var scrollPos = txtarea.scrollTop;
        var strPos = 0;
        var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? "ff" : (document.selection ? "ie" : false ) );
        if (br == "ie") { 
                txtarea.focus();
                var range = document.selection.createRange();
                range.moveStart ('character', -txtarea.value.length);
                strPos = range.text.length;
        }
        else if (br == "ff") strPos = txtarea.selectionStart;

        var front = (txtarea.value).substring(0,strPos);  
        var back = (txtarea.value).substring(strPos,txtarea.value.length); 
        txtarea.value=front+text+back;
        strPos = strPos + text.length;
        if (br == "ie") { 
                txtarea.focus();
                var range = document.selection.createRange();
                range.moveStart ('character', -txtarea.value.length);
                range.moveStart ('character', strPos);
                range.moveEnd ('character', 0);
                range.select();
        }
        else if (br == "ff") {
                txtarea.selectionStart = strPos;
                txtarea.selectionEnd = strPos;
                txtarea.focus();
        }
        txtarea.scrollTop = scrollPos;
        $(txtarea).trigger('change');
    }
})();

(function(){

    $A.delay = function (a) {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    };

})();

(function(){
    $A.rand = function(min, max){
        var min = min || 0;
        var max = max || Number.MAX_SAFE_INTEGER || Number.MAX_VALUE;
        if(min > max){
            var a = max;
            max = min;
            min = a;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})();

(function(){
    
    $A.getFileNameFromUrl = function(url){
        var url = url || document.location.href;
        url = url.substring(0, (url.indexOf("#") === -1) ? url.length : url.indexOf("#"));
        url = url.substring(0, (url.indexOf("?") === -1) ? url.length : url.indexOf("?"));
        url = url.substring(url.lastIndexOf("/") + 1, url.length);
        return url;
    }
})();

(function(){

    $A.ajaxDocumentCover = function (a, b) {
        if(typeof a === 'undefined')var a = false;
        if(typeof b !== 'array' && typeof b !== 'object')b = [];
        
        var text = [
            b[0] || '',
            b[1] || $A.translate("Still working."),
            b[2] || $A.translate("Little more patience please, I'm still working.")
        ]
        if ($A.parseBoolean(a) === true) {
            clearTimeout($A.d.ajaxDocumentCoverFalseTimeout);
            var $oldCover = $("#automizy-document-cover");
            var $cover = $('<div id="automizy-document-cover"></div>');
            var $text = $('<div id="automizy-document-cover-text"></div>');
            $text.appendTo($cover);
            $cover.prependTo('body:first');
            $oldCover.remove();
            $text.html(text[0]);
            $A.d.ajaxDocumentCoverTimeout = setTimeout(function () {
                $text.html(text[1]);
                $A.d.ajaxDocumentCoverTimeout = setTimeout(function () {
                    $text.html(text[2]);
                    $A.d.ajaxDocumentCoverTimeout = setTimeout(function () {
                        $A.ajaxDocumentCover(0);
                    }, 15000);
                }, 5000);
            }, 3000);
        }else{
            $A.d.ajaxDocumentCoverFalseTimeout = setTimeout(function(){
                clearTimeout($A.d.ajaxDocumentCoverTimeout);
                $("#automizy-document-cover").remove();
            }, 50);
        }
    };

})();

(function(){
    $A.skin = function (module) {
        var skin = module.skin();
        var success = false;

        if (module instanceof $A.m.Input) {
            var input = module;
            var $input = input.input();
            var tagName = $input.prop('tagName').toLowerCase();
            var type = input.type();
            var se = input.d.specialElements;
            if (tagName === 'input') {
                if (type === 'file') {
                    if (skin === 'simple-automizy') {
                        //se.file
                        var $fileBox = se.$fileBox = $('<span class="simple-automizy-file-box"></span>');
                        var $table = $('<table cellpadding="0" cellspacing="0" border="0" style="display:inline-table"></table>').width(input.width()).appendTo($fileBox);
                        var $tr = $('<tr></tr>').appendTo($table);
                        var $td1 = $('<td></td>').appendTo($tr);
                        var $td2 = $td1.clone().width(1).appendTo($tr);
                        var fileText = se.fileText = $A.newInput().readonly(true).newRow(false).width('100%').drawTo($td1);
                        fileText.widget().width('100%');
                        var fileButton = se.fileButton = $A.newButton().text($A.translate('Upload')).drawTo($td2);
                        input.data({
                            automizyInput:fileText,
                            automizyButton:fileButton,
                            $automizyTable:$table,
                            $automizyFileBox:$fileBox,
                            $automizyTr:$tr,
                            $automizyTd1:$td1,
                            $automizyTd2:$td2
                        });
                        input.data('automizyButton', fileButton);
                        input.change(function () {
                            var filename = input.val().split('\\').pop();
                            fileText.val(filename);
                        });
                        $fileBox.insertAfter($input);
                        $input.data('table', $table).css({
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 1,
                            opacity:0,
                            height: '33px',
                            width: '100%'
                        });
                        success = true;
                    }
                } else if (type === 'slider') {
                    if (skin === 'simple-automizy') {
                        var $slider = se.$slider = $('<span class="simple-automizy-slider"></span>');
                        var $sliderValue = se.$sliderValue = $('<span class="simple-automizy-slider-value"></span>');
                        $slider.insertAfter($input);
                        $sliderValue.insertAfter($slider);
                        $slider.slider({
                            range: "min",
                            value: 10,
                            min: 5,
                            max: 100,
                            step: 5,
                            slide: function (event, ui) {
                                input.val(ui.value);
                                input.change();
                                $sliderValue.text(ui.value + '%');
                            }
                        });
                        $sliderValue.text($slider.slider("value") + "%");
                        $input.ahide();
                        success = true;
                    }
                }
            }
        }

        return success;
    };
})();

(function(){

    $A.base64Encode = function (data) {
        //  discuss at: http://phpjs.org/functions/base64_encode/
        // original by: Tyler Akins (http://rumkin.com)
        // improved by: Bayron Guevara
        // improved by: Thunder.m
        // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // improved by: Rafał Kukawski (http://kukawski.pl)
        // bugfixed by: Pellentesque Malesuada
        //   example 1: base64_encode('Kevin van Zonneveld');
        //   returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
        //   example 2: base64_encode('a');
        //   returns 2: 'YQ=='

        var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
                ac = 0,
                enc = '',
                tmp_arr = [];

        if (!data) {
            return data;
        }

        do { // pack three octets into four hexets
            o1 = data.charCodeAt(i++);
            o2 = data.charCodeAt(i++);
            o3 = data.charCodeAt(i++);

            bits = o1 << 16 | o2 << 8 | o3;

            h1 = bits >> 18 & 0x3f;
            h2 = bits >> 12 & 0x3f;
            h3 = bits >> 6 & 0x3f;
            h4 = bits & 0x3f;

            // use hexets to index into b64, and append result to encoded string
            tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
        } while (i < data.length);

        enc = tmp_arr.join('');

        var r = data.length % 3;

        return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
    }
})();

(function(){

    $A.base64Decode = function (data) {
        //  discuss at: http://phpjs.org/functions/base64_decode/
        // original by: Tyler Akins (http://rumkin.com)
        // improved by: Thunder.m
        // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        //    input by: Aman Gupta
        //    input by: Brett Zamir (http://brett-zamir.me)
        // bugfixed by: Onno Marsman
        // bugfixed by: Pellentesque Malesuada
        // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        //   example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
        //   returns 1: 'Kevin van Zonneveld'
        //   example 2: base64_decode('YQ===');
        //   returns 2: 'a'

        var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
                ac = 0,
                dec = '',
                tmp_arr = [];

        if (!data) {
            return data;
        }

        data += '';

        do { // unpack four hexets into three octets using index points in b64
            h1 = b64.indexOf(data.charAt(i++));
            h2 = b64.indexOf(data.charAt(i++));
            h3 = b64.indexOf(data.charAt(i++));
            h4 = b64.indexOf(data.charAt(i++));

            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

            o1 = bits >> 16 & 0xff;
            o2 = bits >> 8 & 0xff;
            o3 = bits & 0xff;

            if (h3 == 64) {
                tmp_arr[ac++] = String.fromCharCode(o1);
            } else if (h4 == 64) {
                tmp_arr[ac++] = String.fromCharCode(o1, o2);
            } else {
                tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
            }
        } while (i < data.length);

        dec = tmp_arr.join('');

        return dec.replace(/\0+$/, '');
    }
})();

(function(){
    /*
    * Date Format 1.2.3
    * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
    * MIT license
    *
    * Includes enhancements by Scott Trenda <scott.trenda.net>
    * and Kris Kowal <cixar.com/~kris.kowal/>
    *
    * Accepts a date, a mask, or a date and a mask.
    * Returns a formatted version of the given date.
    * The date defaults to the current date/time.
    * The mask defaults to dateFormat.masks.default.
    */
    var dateFormat = function () {
        var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
                timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                timezoneClip = /[^-+\dA-Z]/g,
                pad = function (val, len) {
                    val = String(val);
                    len = len || 2;
                    while (val.length < len)
                        val = "0" + val;
                    return val;
                };

        // Regexes and supporting functions are cached through closure
        return function (date, mask, utc) {
            var dF = dateFormat;

            // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
            if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
                mask = date;
                date = undefined;
            }

            // Passing date through Date applies Date.parse, if necessary
            date = date ? new Date(date) : new Date;
            if (isNaN(date))
                throw SyntaxError("invalid date");

            mask = String(dF.masks[mask] || mask || dF.masks["default"]);

            // Allow setting the utc argument via the mask
            if (mask.slice(0, 4) == "UTC:") {
                mask = mask.slice(4);
                utc = true;
            }

            var _ = utc ? "getUTC" : "get",
                    d = date[_ + "Date"](),
                    D = date[_ + "Day"](),
                    m = date[_ + "Month"](),
                    y = date[_ + "FullYear"](),
                    H = date[_ + "Hours"](),
                    M = date[_ + "Minutes"](),
                    s = date[_ + "Seconds"](),
                    L = date[_ + "Milliseconds"](),
                    o = utc ? 0 : date.getTimezoneOffset(),
                    flags = {
                        d: d,
                        dd: pad(d),
                        ddd: dF.i18n.dayNames[D],
                        dddd: dF.i18n.dayNames[D + 7],
                        m: m + 1,
                        mm: pad(m + 1),
                        mmm: dF.i18n.monthNames[m],
                        mmmm: dF.i18n.monthNames[m + 12],
                        yy: String(y).slice(2),
                        yyyy: y,
                        h: H % 12 || 12,
                        hh: pad(H % 12 || 12),
                        H: H,
                        HH: pad(H),
                        M: M,
                        MM: pad(M),
                        s: s,
                        ss: pad(s),
                        l: pad(L, 3),
                        L: pad(L > 99 ? Math.round(L / 10) : L),
                        t: H < 12 ? "a" : "p",
                        tt: H < 12 ? "am" : "pm",
                        T: H < 12 ? "A" : "P",
                        TT: H < 12 ? "AM" : "PM",
                        Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                        o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                        S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
                    };

            return mask.replace(token, function ($0) {
                return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
            });
        };
    }();

// Some common format strings
    dateFormat.masks = {
        "default": "ddd mmm dd yyyy HH:MM:ss",
        shortDate: "m/d/yy",
        mediumDate: "mmm d, yyyy",
        longDate: "mmmm d, yyyy",
        fullDate: "dddd, mmmm d, yyyy",
        shortTime: "h:MM TT",
        mediumTime: "h:MM:ss TT",
        longTime: "h:MM:ss TT Z",
        mysqlDateTime: "yyyy-mm-dd HH:MM:ss",
        isoDate: "yyyy-mm-dd",
        isoTime: "HH:MM:ss",
        isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
    };

// Internationalization strings
    dateFormat.i18n = {
        dayNames: [
            "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        monthNames: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ]
    };
    $A.dateFormat = dateFormat;
// For convenience...
    /*Date.prototype.format = function (mask, utc) {
        return dateFormat(this, mask, utc);
    };*/
})();

(function(){
    /*
    * store.js 1.3.18
    * (c) 2010-2014 Marcus Westin <http://marcuswest.in>
    * MIT license
    *
    * localStorage wrapper for all browsers without using cookies or flash.
    * Uses localStorage, globalStorage, and userData behavior under the hood
    */
    var win = window;
    var store = {},
        doc = win.document,
        localStorageName = 'localStorage',
        scriptTag = 'script',
        storage;

    store.disabled = false;
    store.version = '1.3.17';
    store.set = function(key, value) {};
    store.get = function(key, defaultVal) {};
    store.has = function(key) { return store.get(key) !== undefined };
    store.remove = function(key) {};
    store.clear = function() {};
    store.transact = function(key, defaultVal, transactionFn) {
        if (transactionFn == null) {
            transactionFn = defaultVal;
            defaultVal = null;
        }
        if (defaultVal == null) {
            defaultVal = {};
        }
        var val = store.get(key, defaultVal);
        transactionFn(val);
        store.set(key, val);
    };
    store.getAll = function() {};
    store.forEach = function() {};

    store.serialize = function(value) {
        return JSON.stringify(value)
    };
    store.deserialize = function(value) {
        if (typeof value != 'string') { return undefined }
        try { return JSON.parse(value) }
        catch(e) { return value || undefined }
    };

    // Functions to encapsulate questionable FireFox 3.6.13 behavior
    // when about.config::dom.storage.enabled === false
    // See https://github.com/marcuswestin/store.js/issues#issue/13
    function isLocalStorageNameSupported() {
        try { return (localStorageName in win && win[localStorageName]) }
        catch(err) { return false }
    }

    if (isLocalStorageNameSupported()) {
        storage = win[localStorageName];
        store.set = function(key, val) {
            if (val === undefined) { return store.remove(key) }
            storage.setItem(key, store.serialize(val));
            return val
        };
        store.get = function(key, defaultVal) {
            var val = store.deserialize(storage.getItem(key));
            return (val === undefined ? defaultVal : val)
        };
        store.remove = function(key) { storage.removeItem(key) };
        store.clear = function() { storage.clear() };
        store.getAll = function() {
            var ret = {};
            store.forEach(function(key, val) {
                ret[key] = val
            });
            return ret
        };
        store.forEach = function(callback) {
            for (var i=0; i<storage.length; i++) {
                var key = storage.key(i);
                callback(key, store.get(key))
            }
        }
    } else if (doc.documentElement.addBehavior) {
        var storageOwner,
            storageContainer;
        // Since #userData storage applies only to specific paths, we need to
        // somehow link our data to a specific path.  We choose /favicon.ico
        // as a pretty safe option, since all browsers already make a request to
        // this URL anyway and being a 404 will not hurt us here.  We wrap an
        // iframe pointing to the favicon in an ActiveXObject(htmlfile) object
        // (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
        // since the iframe access rules appear to allow direct access and
        // manipulation of the document element, even for a 404 page.  This
        // document can be used instead of the current document (which would
        // have been limited to the current path) to perform #userData storage.
        try {
            storageContainer = new ActiveXObject('htmlfile');
            storageContainer.open();
            storageContainer.write('<'+scriptTag+'>document.w=window</'+scriptTag+'><iframe src="/favicon.ico"></iframe>');
            storageContainer.close();
            storageOwner = storageContainer.w.frames[0].document;
            storage = storageOwner.createElement('div')
        } catch(e) {
            // somehow ActiveXObject instantiation failed (perhaps some special
            // security settings or otherwse), fall back to per-path storage
            storage = doc.createElement('div');
            storageOwner = doc.body;
        }
        var withIEStorage = function(storeFunction) {
            return function() {
                var args = Array.prototype.slice.call(arguments, 0);
                args.unshift(storage);
                // See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
                // and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
                storageOwner.appendChild(storage);
                storage.addBehavior('#default#userData');
                storage.load(localStorageName);
                var result = storeFunction.apply(store, args);
                storageOwner.removeChild(storage);
                return result
            }
        };

        // In IE7, keys cannot start with a digit or contain certain chars.
        // See https://github.com/marcuswestin/store.js/issues/40
        // See https://github.com/marcuswestin/store.js/issues/83
        var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
        function ieKeyFix(key) {
            return key.replace(/^d/, '___$&').replace(forbiddenCharsRegex, '___')
        }
        store.set = withIEStorage(function(storage, key, val) {
            key = ieKeyFix(key);
            if (val === undefined) { return store.remove(key) }
            storage.setAttribute(key, store.serialize(val));
            storage.save(localStorageName);
            return val
        });
        store.get = withIEStorage(function(storage, key, defaultVal) {
            key = ieKeyFix(key);
            var val = store.deserialize(storage.getAttribute(key));
            return (val === undefined ? defaultVal : val)
        });
        store.remove = withIEStorage(function(storage, key) {
            key = ieKeyFix(key);
            storage.removeAttribute(key);
            storage.save(localStorageName)
        });
        store.clear = withIEStorage(function(storage) {
            var attributes = storage.XMLDocument.documentElement.attributes;
            storage.load(localStorageName);
            for (var i=0, attr; attr=attributes[i]; i++) {
                storage.removeAttribute(attr.name)
            }
            storage.save(localStorageName)
        });
        store.getAll = function(storage) {
            var ret = {};
            store.forEach(function(key, val) {
                ret[key] = val
            });
            return ret
        };
        store.forEach = withIEStorage(function(storage, callback) {
            var attributes = storage.XMLDocument.documentElement.attributes;
            for (var i=0, attr; attr=attributes[i]; ++i) {
                callback(attr.name, store.deserialize(storage.getAttribute(attr.name)))
            }
        })
    }

    try {
        var testKey = '__storejs__';
        store.set(testKey, testKey);
        if (store.get(testKey) != testKey) { store.disabled = true }
        store.remove(testKey)
    } catch(e) {
        store.disabled = true
    }
    store.enabled = !store.disabled;

    /*
    if (typeof module != 'undefined' && module.exports && this.module !== module) { module.exports = store }
    else if (typeof define === 'function' && define.amd) { (function(){ win.store = store }
    */
    $A.store = store;
})();

(function(){

    $A.convertToResponsive = function (data) {
        $('body').addClass('automizy-mobile');

        /*JavaScripts needed for mobile version*/

    }
})();

(function(){

    $A.default.numberFormat = {
        decimals:0,
        decPoint:'.',
        thousandsSep:','
    };

    $A.numberFormat = function (number, decimals, decPoint, thousandsSep) {
        if(typeof decimals === 'undefined'){
            var decimals = $A.default.numberFormat.decimals;
        }
        if(typeof decPoint === 'undefined'){
            var decPoint = $A.default.numberFormat.decPoint;
        }
        if(typeof thousandsSep === 'undefined'){
            var thousandsSep = $A.default.numberFormat.thousandsSep;
        }

        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep,
            dec = (typeof decPoint === 'undefined') ? '.' : decPoint,
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return Math.round(n * k) / k;
            },
            s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    };
    $A.defaultNumberFormat = function (numberFormat) {
        if(typeof numberFormat === 'undefined'){
            return $A.default.numberFormat;
        }
        var numberFormat = numberFormat || {};
        if(typeof numberFormat.decimals !== 'undefined'){
            $A.default.numberFormat.decimals = numberFormat.decimals;
        }
        if(typeof numberFormat.decPoint !== 'undefined'){
            $A.default.numberFormat.decPoint = numberFormat.decPoint;
        }
        if(typeof numberFormat.thousandsSep !== 'undefined'){
            $A.default.numberFormat.thousandsSep = numberFormat.thousandsSep;
        }
        return $A;
    };

})();

(function(){

    var doc = document.implementation.createHTMLDocument("");
    var element = doc.createElement('div');

    function getText(str) {
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
        return str;
    }

    $A.decodeEntities = function (str) {
        if (str && typeof str === 'string') {
            var x = getText(str);
            while (str !== x) {
                str = x;
                x = getText(x);
            }
            return x;
        }
        return str;
    }
})();

(function(){
    console.log('%c AutomizyJs module loaded! ', 'background: #000000; color: #bada55; font-size:14px');
    return AutomizyJs;
})();