/*!
 * @plugin      : Image Slice
 * @version     : v1.0.0
 * @license     : GPLv3 for Open Source Use
 * @author      : Anfath Hifans
 * @copyright   : © 2018
 * @url         : github.com/anfathhifans
 */

if (typeof jQuery === 'undefined') {
    throw new Error('requires jQuery needs to load the calculation plugin');
}

(function( $ ){ 
    
    "use strict"; 
    
    $.fn.imageSlice = function( options ){        
        
        // default options
        var settings = $.extend({
            height : 0, 
            width :  0,
            count :  0,
            column : 0,
            padding : 0,
            path : null,
            prefix : null,
            extention :  null,
        }, options);
        
        this.css({
            width: (settings.width * settings.column) + ((settings.column - 1) * settings.padding),
            height: (settings.height * Math.round(settings.count / settings.column)) + (( Math.round( settings.count / settings.column ) -1 ) * settings.padding),                    
        });
        
        var i_top = 0;
        var i_left = 0
        var appendHTML = '';
        for(var i = 1; i <= settings.count; i++){ 
            appendHTML += '<img style="position:absolute;top:' + i_top + 'px;left:' + i_left + 'px;" src="'+ settings.path + settings.prefix + i + '.' + settings.extention + '" alt="image slice" />';                    
            if(i%settings.column == 0){                        
                i_left = 0;
                i_top += settings.height + settings.padding;
            }else{
                i_left += settings.width + settings.padding;
            }
        }
        
        return this.append(appendHTML);
        
    }; 
    
})( jQuery );