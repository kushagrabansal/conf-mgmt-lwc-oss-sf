!(function (e) {
    function s(s) {
        for (
            var r, o, a = s[0], l = s[1], c = s[2], p = 0, u = [];
            p < a.length;
            p++
        )
            (o = a[p]),
                Object.prototype.hasOwnProperty.call(i, o) &&
                    i[o] &&
                    u.push(i[o][0]),
                (i[o] = 0);
        for (r in l)
            Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
        for (d && d(s); u.length; ) u.shift()();
        return n.push.apply(n, c || []), t();
    }
    function t() {
        for (var e, s = 0; s < n.length; s++) {
            for (var t = n[s], r = !0, a = 1; a < t.length; a++) {
                var l = t[a];
                0 !== i[l] && (r = !1);
            }
            r && (n.splice(s--, 1), (e = o((o.s = t[0]))));
        }
        return e;
    }
    var r = {},
        i = { 1: 0 },
        n = [];
    function o(s) {
        if (r[s]) return r[s].exports;
        var t = (r[s] = { i: s, l: !1, exports: {} });
        return e[s].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
    }
    (o.m = e),
        (o.c = r),
        (o.d = function (e, s, t) {
            o.o(e, s) ||
                Object.defineProperty(e, s, { enumerable: !0, get: t });
        }),
        (o.r = function (e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (o.t = function (e, s) {
            if ((1 & s && (e = o(e)), 8 & s)) return e;
            if (4 & s && 'object' == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if (
                (o.r(t),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    value: e
                }),
                2 & s && 'string' != typeof e)
            )
                for (var r in e)
                    o.d(
                        t,
                        r,
                        function (s) {
                            return e[s];
                        }.bind(null, r)
                    );
            return t;
        }),
        (o.n = function (e) {
            var s =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return o.d(s, 'a', s), s;
        }),
        (o.o = function (e, s) {
            return Object.prototype.hasOwnProperty.call(e, s);
        }),
        (o.p = './');
    var a = (window.webpackJsonp = window.webpackJsonp || []),
        l = a.push.bind(a);
    (a.push = s), (a = a.slice());
    for (var c = 0; c < a.length; c++) s(a[c]);
    var d = l;
    n.push([1, 0]), t();
})([
    ,
    function (e, s, t) {
        e.exports = t(3);
    },
    function (e, s) {
        var t;
        t = (function () {
            return this;
        })();
        try {
            t = t || new Function('return this')();
        } catch (e) {
            'object' == typeof window && (t = window);
        }
        e.exports = t;
    },
    function (e, s, t) {
        'use strict';
        t.r(s);
        var r = t(0);
        var i = [
            function (e, s, t) {
                return [
                    '.content',
                    s,
                    '{padding:0 3rem}header',
                    s,
                    '{padding:1rem;display:flex;color:#fff;background:#0288d1;box-shadow:0 4px 3px rgba(1,87,155,.5);align-items:center}header',
                    s,
                    ' img',
                    s,
                    '{height:3rem;margin-right:.3rem}header',
                    s,
                    ' h2',
                    s,
                    '{font-size:1.75rem;font-weight:300}'
                ].join('');
            }
        ];
        var n = [
            function (e, s, t) {
                return [
                    t
                        ? ':host{width:100%;padding:2rem;color:#080707}'
                        : [e, '{width:100%;padding:2rem;color:#080707}'].join(
                              ''
                          ),
                    '.session',
                    s,
                    '{width:100%;display:flex;font-size:1rem;justify-content:space-between;text-align:left;margin:1rem 0;padding:1rem;background-color:transparent;align-items:center;border:1px solid #dddbda;border-left:3px solid #0277bd;border-radius:0 .5rem .5rem 0}.session:hover',
                    s,
                    '{background-color:#e1f5fe;cursor:pointer;text-decoration:none}.session',
                    s,
                    ' p',
                    s,
                    '{margin:0}.session',
                    s,
                    ' .title',
                    s,
                    '{font-weight:600;font-size:1.2rem}.session',
                    s,
                    ' .icon',
                    s,
                    '{color:#039be5;background-repeat:no-repeat;background-size:contain;padding-left:1.75rem}.session',
                    s,
                    ' .icon.time',
                    s,
                    '{background-image:url(https://developer.salesforce.com/files/js-dev/icons/clock.svg);margin-top:.6rem}.session',
                    s,
                    ' .icon.room',
                    s,
                    '{background-image:url(https://developer.salesforce.com/files/js-dev/icons/location.svg);margin-top:.4rem}input',
                    s,
                    '{border:1px solid #dddbda;border-radius:.25rem;transition:border .1s linear,background-color .1s linear;display:inline-block;padding:0 1rem 0 .75rem;line-height:2rem;font-size:1rem;width:15rem}.speaker-pictures',
                    s,
                    '{display:flex;justify-content:end}.speaker-pictures',
                    s,
                    '>img',
                    s,
                    '{border-radius:50%;height:3.5rem;margin-left:.5rem}'
                ].join('');
            }
        ];
        function o(e, s, t, r) {
            const { b: i, h: n, d: o, k: a, i: l, f: c } = e,
                { _m0: d, _m1: p } = r;
            return [
                n(
                    'div',
                    { classMap: { list: !0 }, key: 8 },
                    c([
                        n(
                            'input',
                            {
                                attrs: {
                                    type: 'search',
                                    placeholder: 'Search sessions...'
                                },
                                key: 0,
                                on: {
                                    input:
                                        d || (r._m0 = i(s.handleSearchKeyInput))
                                }
                            },
                            []
                        ),
                        l(s.sessions, function (e, t) {
                            return n(
                                'a',
                                {
                                    classMap: { session: !0 },
                                    attrs: { 'data-index': t },
                                    key: a(7, e.id),
                                    on: {
                                        click:
                                            p ||
                                            (r._m1 = i(s.handleSessionClick))
                                    }
                                },
                                [
                                    n('div', { key: 4 }, [
                                        n(
                                            'p',
                                            { classMap: { title: !0 }, key: 1 },
                                            [o(e.name)]
                                        ),
                                        n(
                                            'p',
                                            {
                                                classMap: {
                                                    icon: !0,
                                                    time: !0
                                                },
                                                key: 2
                                            },
                                            [o(e.dateTime)]
                                        ),
                                        n(
                                            'p',
                                            {
                                                classMap: {
                                                    icon: !0,
                                                    room: !0
                                                },
                                                key: 3
                                            },
                                            [o(e.room)]
                                        )
                                    ]),
                                    n(
                                        'div',
                                        {
                                            classMap: {
                                                'speaker-pictures': !0
                                            },
                                            key: 6
                                        },
                                        l(e.speakers, function (e) {
                                            return n(
                                                'img',
                                                {
                                                    attrs: {
                                                        src: e.pictureUrl,
                                                        alt: e.name,
                                                        title: e.name
                                                    },
                                                    key: a(5, e.id)
                                                },
                                                []
                                            );
                                        })
                                    )
                                ]
                            );
                        })
                    ])
                )
            ];
        }
        var a = Object(r.registerTemplate)(o);
        (o.stylesheets = []),
            n && o.stylesheets.push.apply(o.stylesheets, n),
            (o.stylesheetTokens = {
                hostAttribute: 'my-modules-my_sessionList-host',
                shadowAttribute: 'my-modules-my_sessionList'
            });
        let l = [];
        class c extends r.LightningElement {
            constructor(...e) {
                super(...e), (this.sessions = []);
            }
            connectedCallback() {
                fetch('/api/sessions')
                    .then((e) => {
                        if (!e.ok) throw new Error('No response from server');
                        return e.json();
                    })
                    .then((e) => ((l = e.data), l))
                    .then((e) => {
                        this.sessions = this.allSessions = e;
                    });
            }
            handleSearchKeyInput(e) {
                const s = e.target.value.toLowerCase();
                this.sessions = this.allSessions.filter((e) =>
                    e.name.toLowerCase().includes(s)
                );
            }
            handleSessionClick(e) {
                const s = e.currentTarget.dataset.index,
                    t = new CustomEvent('navigate', {
                        detail: this.sessions[s].id
                    });
                this.dispatchEvent(t);
            }
        }
        Object(r.registerDecorators)(c, { fields: ['sessions'] });
        var d = Object(r.registerComponent)(c, { tmpl: a });
        var p = [
            function (e, s, t) {
                return [
                    t
                        ? ':host{width:100%;margin:2rem;color:#080707}'
                        : [e, '{width:100%;margin:2rem;color:#080707}'].join(
                              ''
                          ),
                    'p',
                    s,
                    '{margin:0}.icon',
                    s,
                    '{color:#039be5;background-repeat:no-repeat;background-size:contain;padding-left:24px}.icon.time',
                    s,
                    '{background-image:url(https://developer.salesforce.com/files/js-dev/icons/clock.svg);margin-top:.6rem}.icon.room',
                    s,
                    '{background-image:url(https://developer.salesforce.com/files/js-dev/icons/location.svg);margin-top:.4rem}h2',
                    s,
                    '{font-weight:600;font-size:1.4rem}h3',
                    s,
                    '{font-weight:700;font-size:1.1rem;margin:1.5rem 0 .5rem}.list-wrapper',
                    s,
                    '{display:flex;flex-direction:column}.speaker-list',
                    s,
                    '{display:flex;flex-direction:row;flex-wrap:wrap;margin:0 -.5rem}'
                ].join('');
            }
        ];
        var u = [
            function (e, s, t) {
                return [
                    t
                        ? ':host{margin:.5rem;flex:1;color:#080707}'
                        : [e, '{margin:.5rem;flex:1;color:#080707}'].join(''),
                    '.card',
                    s,
                    '{border:1px solid #dddbda;border-radius:.25rem;padding:1rem}.card',
                    s,
                    ' .header',
                    s,
                    '{display:flex;align-items:center;margin-bottom:1rem}.card',
                    s,
                    ' img',
                    s,
                    '{border-radius:50%;height:5rem;margin-right:1rem}.card',
                    s,
                    ' .title',
                    s,
                    '{font-weight:600}.card',
                    s,
                    ' .icon',
                    s,
                    '{color:#039be5;background-repeat:no-repeat;background-size:contain;padding-left:24px}.card',
                    s,
                    ' .icon.email',
                    s,
                    '{background-image:url(https://developer.salesforce.com/files/js-dev/icons/email.svg);margin-top:.4rem}p',
                    s,
                    '{margin:0}'
                ].join('');
            }
        ];
        function m(e, s, t, r) {
            const { h: i, d: n } = e;
            return [
                i('div', { classMap: { card: !0 }, key: 5 }, [
                    i('div', { classMap: { header: !0 }, key: 4 }, [
                        i(
                            'img',
                            {
                                attrs: {
                                    src: s.speaker.pictureUrl,
                                    alt: 'Speaker picture'
                                },
                                key: 0
                            },
                            []
                        ),
                        i('div', { key: 3 }, [
                            i('p', { classMap: { title: !0 }, key: 1 }, [
                                n(s.speaker.name)
                            ]),
                            i(
                                'p',
                                { classMap: { icon: !0, email: !0 }, key: 2 },
                                [n(s.speaker.email)]
                            )
                        ])
                    ]),
                    n(s.speaker.bio)
                ])
            ];
        }
        var h = Object(r.registerTemplate)(m);
        (m.stylesheets = []),
            u && m.stylesheets.push.apply(m.stylesheets, u),
            (m.stylesheetTokens = {
                hostAttribute: 'my-modules-my_speakerCard-host',
                shadowAttribute: 'my-modules-my_speakerCard'
            });
        class g extends r.LightningElement {
            constructor(...e) {
                super(...e), (this.speaker = void 0);
            }
        }
        Object(r.registerDecorators)(g, {
            publicProps: { speaker: { config: 0 } }
        });
        var f = Object(r.registerComponent)(g, { tmpl: h });
        function y(e, s, t, r) {
            const { d: i, h: n, t: o, k: a, c: l, i: c } = e;
            return [
                s.session ? n('h2', { key: 0 }, [i(s.session.name)]) : null,
                s.session
                    ? n('p', { classMap: { icon: !0, time: !0 }, key: 1 }, [
                          i(s.session.dateTime)
                      ])
                    : null,
                s.session
                    ? n('p', { classMap: { icon: !0, room: !0 }, key: 2 }, [
                          i(s.session.room)
                      ])
                    : null,
                s.session ? n('h3', { key: 3 }, [o('Abstract')]) : null,
                s.session
                    ? n('div', { classMap: { abstract: !0 }, key: 4 }, [
                          i(s.session.description)
                      ])
                    : null,
                s.session ? n('h3', { key: 5 }, [o('Speakers')]) : null,
                s.session
                    ? n(
                          'div',
                          { classMap: { 'speaker-list': !0 }, key: 7 },
                          s.session.speakers
                              ? c(s.session.speakers, function (e) {
                                    return l(
                                        'my-speaker-card',
                                        f,
                                        {
                                            props: { speaker: e },
                                            key: a(6, e.id)
                                        },
                                        []
                                    );
                                })
                              : []
                      )
                    : null
            ];
        }
        var b = Object(r.registerTemplate)(y);
        (y.stylesheets = []),
            p && y.stylesheets.push.apply(y.stylesheets, p),
            (y.stylesheetTokens = {
                hostAttribute: 'my-modules-my_sessionDetails-host',
                shadowAttribute: 'my-modules-my_sessionDetails'
            });
        class k extends r.LightningElement {
            constructor(...e) {
                super(...e), (this.session = void 0);
            }
            set sessionId(e) {
                var s;
                (this._sessionId = e),
                    (this.session = ((s = e), l.find((e) => e.id === s)));
            }
            get sessionId() {
                return this._sessionId;
            }
        }
        Object(r.registerDecorators)(k, {
            publicProps: { sessionId: { config: 3 } },
            fields: ['session']
        });
        var v = Object(r.registerComponent)(k, { tmpl: b });
        function w(e, s, t, r) {
            const { h: i, t: n, b: o, c: a } = e,
                { _m0: l } = r;
            return [
                i('header', { key: 2 }, [
                    i(
                        'img',
                        {
                            attrs: {
                                src: 'resources/lwc.png',
                                alt: 'App logo'
                            },
                            key: 0
                        },
                        []
                    ),
                    i('h2', { key: 1 }, [n('Lightning Conference')])
                ]),
                i('main', { classMap: { content: !0 }, key: 5 }, [
                    s.isStateList
                        ? a(
                              'my-session-list',
                              d,
                              {
                                  key: 3,
                                  on: {
                                      navigate:
                                          l || (r._m0 = o(s.handleNavigate))
                                  }
                              },
                              []
                          )
                        : null,
                    s.isStateDetails
                        ? a(
                              'my-session-details',
                              v,
                              { props: { sessionId: s.sessionId }, key: 4 },
                              []
                          )
                        : null
                ])
            ];
        }
        var j = Object(r.registerTemplate)(w);
        (w.stylesheets = []),
            i && w.stylesheets.push.apply(w.stylesheets, i),
            (w.stylesheetTokens = {
                hostAttribute: 'my-modules-my_app-host',
                shadowAttribute: 'my-modules-my_app'
            });
        class x extends r.LightningElement {
            constructor() {
                super(),
                    (this.sessionId = void 0),
                    (this.state = void 0),
                    (this.state = 'list'),
                    window.history.replaceState('list', null, ''),
                    (window.onpopstate = (e) => {
                        e.state && (this.state = e.state);
                    });
            }
            handleNavigate(e) {
                (this.sessionId = e.detail),
                    (this.state = 'details'),
                    window.history.pushState('details', null);
            }
            get isStateList() {
                return 'list' === this.state;
            }
            get isStateDetails() {
                return 'details' === this.state;
            }
        }
        Object(r.registerDecorators)(x, { fields: ['sessionId', 'state'] });
        var O = Object(r.registerComponent)(x, { tmpl: j });
        const _ = Object(r.createElement)('my-app', { is: O });
        document.querySelector('#main').appendChild(_);
    }
]);
