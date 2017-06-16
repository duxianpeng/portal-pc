'use strict';

$.fn.slide = function(options) {
    var self = this;
    var index = 0;
    var expectedIndex = 0;
    var manualMoveFlag = false;
    var _interval = null;
    var _duration = options || 7000;
    var _durationFast = 130;

    var setDotColor = function(){
        this.find('.dot-wrap>span').removeClass('dot-selected').eq(index).addClass('dot-selected');
        this.find('.dot-wrap>span').not('dot-selected').hover(function(){
            $(this).css("color", "#000");
        }, function(){
            $(this).css("color", "rgba(0,0,0,.5)");
        });
    };

    var updateIndex = function(orient) {
        var imgs = this.find("img");
        var len = imgs.length;
        var tempDuration = _duration;
        if (orient === 'next') {
            index = (index + 1) % len;
        } else if (orient === 'prev') {
            index = index - 1;
            if (index < 0) {
                index = len - 1;
            }
        }
        
        if (_interval) {
            clearTimeout(_interval);
        }

        if(manualMoveFlag && expectedIndex !== index){
            tempDuration = _durationFast;
            _interval = setTimeout(expectedIndex > index?goNext.apply(self):goPrev.apply(self), tempDuration);
        } else {
            manualMoveFlag = false;
            tempDuration = _duration;
            _interval = setTimeout(goRandom, tempDuration);
        }
        setDotColor.apply(this);
    };

    var goNext = function() {
        var imgs = this.find("img");
        var len = imgs.length;

        var nextIndex = (index + 1) % len;
        var cur = imgs.eq(index);
        var next = imgs.eq(nextIndex);
        cur.css("z-index", 10).css("left", 0);
        next.css("z-index", 10).css("left", -this.width());
        cur.stop(true, true).animate({ left: '+=' + this.width() }, manualMoveFlag?_durationFast:'normal', function() {
            updateIndex.call(self, 'next');
        });
        next.stop(true, true).animate({ left: '+=' + this.width() }, manualMoveFlag?_durationFast:'normal');

    };

    var goPrev = function() {
        var imgs = this.find("img");
        var len = imgs.length;

        var prevIndex = index - 1;
        if (prevIndex < 0) {
            prevIndex = len - 1;
        }
        var cur = imgs.eq(index);
        var prev = imgs.eq(prevIndex);
        cur.css("z-index", 10).css("left", 0);
        prev.css("z-index", 10).css("left", this.width());
        cur.stop(true, true).animate({ left: '-=' + this.width() }, manualMoveFlag?_durationFast:'normal', function() {
            updateIndex.call(self, 'prev');
        });
        prev.stop(true, true).animate({ left: '-=' + this.width() }, manualMoveFlag?_durationFast:'normal');
    };

    var goRandom = function() {
        var ram = Math.random();

        if (ram > 0.5) {
            goNext.apply(self);
        } else {
            goPrev.apply(self);
        }
    };

    var init = function() {
        this.append("<div class='dot-wrap'></div>");
        this.append("<div class='banner-prev'><span class='iconfont icon-arrowleft'></span></div>");
        this.append("<div class='banner-next'><span class='iconfont icon-arrowright'></span></div>");


        this.find("img").css("width", this.css("width")).css("height", this.css("height"));
        this.find(".banner-prev").css("top", (this.height() / 2 - 25));
        this.find(".banner-next").css("top", (this.height() / 2 - 25));
        this.find("img").each(function(index) {
            self.find(".dot-wrap").append("<span class='iconfont icon-dot'></span>");
        });
        setDotColor.apply(this);
        this.find('.banner-prev').on('click', _.debounce(function() {
            if (_interval) {
                clearInterval(_interval);
            }
            self.find("img").stop(true, true);
            goPrev.apply(self);
        }, 300));

        this.find('.banner-next').on('click', _.debounce(function() {
            if (_interval) {
                clearInterval(_interval);
            }
            self.find("img").stop(true, true);
            goNext.apply(self);
        }, 300));
        this.find('.dot-wrap>span').on('click', function() {
            expectedIndex = $(this).index();
            manualMoveFlag = true;
            if(expectedIndex > index){
                goNext.apply(self);
            } else {
                goPrev.apply(self);
            }

        });

    };

    init.apply(self);
    _interval = setTimeout(goRandom, _duration);
};
