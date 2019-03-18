// License: MIT License
// Copied and modified from: https://github.com/jgallen23/toc/blob/master/lib/toc.js

(function ($) {
    var verboseIdCache = {};
    $.fn.toc = function (options) {
        var self = this;
        var opts = $.extend({}, jQuery.fn.toc.defaults, options);

        var container = $(opts.container);
        var headings = $(opts.selectors, container);

        return this.each(function () {
            //build TOC
            var el = $(this);
            var ul = $(opts.listType);

            headings.each(function (i, heading) {
                var $h = $(heading);

                var anchorName;
                if ($h.attr('id') != undefined) {
                    anchorName = heading.id;
                } else {
                    anchorName = opts.anchorName(i, heading, opts.prefix);
                    $h.attr('id', anchorName);
                }

                //build TOC item
                var a = $('<a/>')
                    .text(opts.headerText(i, heading, $h))
                    .attr('href', '#' + anchorName);

                //var li = $('<li/>').addClass(opts.itemClass(i, heading, $h, opts.prefix)).append(a);
                var li = $('<li/>').append(a);
                if (i == 0) {
                    li.addClass(opts.activeClass);
                }

                ul.append(li);
            });
            el.html(ul);
        });
    };

    jQuery.fn.toc.defaults = {
        container: 'body',
        listType: '<ul/>',
        selectors: 'h1,h2,h3',
        prefix: 'toc',
        activeClass: 'active',
        anchorName: function (i, heading, prefix) {
            if (heading.id.length) {
                return heading.id;
            }

            var candidateId = $(heading).text().replace(/[^a-z0-9]/ig, ' ').replace(/\s+/g, '-').toLowerCase();
            if (verboseIdCache[candidateId]) {
                var j = 2;

                while (verboseIdCache[candidateId + j]) {
                    j++;
                }
                candidateId = candidateId + '-' + j;

            }
            verboseIdCache[candidateId] = true;

            return prefix + '-' + candidateId;
        },
        headerText: function (i, heading, $heading) {
            return $heading.data('toc-title') || $heading.text();
        },
        itemClass: function (i, heading, $heading, prefix) {
            return prefix + '-' + $heading[0].tagName.toLowerCase();
        }

    };

})(jQuery);


$('#toc').toc({
    selectors: 'h2, h3',
    listType: '<ul class="nav nav-pills nav-stacked">',
});



/* -------- Hover links ------ */
$(function () {
    return $("h2, h3, h4, h5, h6").each(function (i, el) {
        var $el, icon, id;
        $el = $(el);
        id = $el.attr('id');
        icon = '<i class="fa fa-link"></i>';
        if (id) {
            return $el.prepend($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
        }
    });
});