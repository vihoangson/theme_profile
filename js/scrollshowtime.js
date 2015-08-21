(function($){
 $.fn.scrollShowTime=function(o){
    var getOption = {
        correctionY: 100
    ,   onShow: function(){}
    }
    $.extend(getOption, o);
        
        return this.each(function(){
            var _this = $(this)
                ,topOffset
                ,windowHeight
                ,_visible=false
                ,_win=$(window)
                ,_doc=$(document)
                ;
            init();
            function init(){
                setTopOffset();
                _this.addClass('hide_state');
                addEventHandler();
            }//end init
            function setTopOffset(){
                topOffset = _this.offset().top;
            }
            function addEventHandler(){
                $(window).on('scroll',function(){
                    positionListener();
                }).trigger('scroll');
                
                $(window).on('resize', function(){
                    positionListener();
                })
            }
            positionListener();
            function positionListener(){
                windowHeight = $(window).height();
                if(((windowHeight+_doc.scrollTop()-getOption.correctionY) > topOffset) && (!_visible)){
                    _visible = true;
                    _this.toggleClass("hide_state show_state");
                    getOption.onShow();
                }
            }
        })
    }
})(jQuery)