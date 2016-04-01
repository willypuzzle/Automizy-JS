define([
    'automizy/core'
], function () {
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
});