export const state = () => ({
    colors: {},
    sitewide: {},
    nav: [],
    pages: {}
});

function sortItems(data) {
    let newdata = [];
    for (var d in data) {
        let keys = Object.keys(newdata);
        let item = data[d];
        if (item.shown || item.status || item.status === 'published') {
            newdata.push(item);
        }
    }
    return newdata;
}

function setStyles(data, colors, subType) {
    let widg = data;
    let styles = data.styles;
    for (let s in styles) {
        if (s.indexOf("class_") >= 0) { //SET CLASSES
            let classname = s.split("class_")[1];
            let type = data.type ? data.type + "--" : subType + "--";
            let choosen;
            if (typeof styles[s] !== "boolean") {
                choosen = styles[s].toLowerCase().replace(/ /g, "-");
            } else {
                choosen = styles[s];
            }
            widg.classes.push(type + classname + "--" + choosen);
        } else if (s.indexOf("attribute_") >= 0) { //SET ATTRIBUTES FOR VUETIFY COMPONENTS
            let attribute = s.split("attribute_")[1];
            let choosen;
            if (typeof styles[s] !== "boolean") {
                choosen = styles[s].toLowerCase().replace(/ /g, "-");
            } else {
                choosen = styles[s];
            }
            widg.attributes[attribute] = choosen;
        } else if (s.indexOf("style_") >= 0) {
            let name = s.split("_")[1];
            let type = s.split("_")[2];
            let variable = styles[s];
            if (type) {
                if (name.toLowerCase().indexOf("color") >= 0) {
                    widg.parsedStyles[type][name] = colors[variable].code;
                } else {
                    widg.parsedStyles[type][name] = variable;
                }
            }
        }
        // else if (s.indexOf("_") >= 0 || s.indexOf("color_") >= 0) { //SET PARSED STYLES - SHOULD BE ALL COLORS
        //     let style = s.split("_")[0];
        //     let elem = s.split("_")[1];
        //     if (elem in widg.parsedStyles) {
        //         widg.parsedStyles[elem][style] = colors[styles[s]].code;
        //     } else if (elem && styles[s]) {
        //         widg.parsedStyles[elem] = {};
        //         widg.parsedStyles[elem][style] = colors[styles[s]].code;
        //     }
        // }
    }
    return widg;
}

export const mutations = {
    setColors(state, data) {
        let newObj = {};
        for (let c in data) {
            let color = data[c];
            newObj[color.name] = color;
        }
        state.colors = newObj;
    },
    setSitewide(state, data) {
        data.persistentbar.classes = [];
        data.persistentbar.parsedStyles = {};
        data.footer.classes = [];
        data.footer.parsedStyles = {};
        data.nav = {};
        data.nav.styles = data.options.nav.styles;
        data.nav.classes = [];
        data.nav.parsedStyles = {};
        data.styles = {
            persistentbar: setStyles(data.persistentbar, state.colors),
            footer: setStyles(data.footer, state.colors),
            nav: setStyles(data.nav, state.colors)
        }
        state.sitewide = data;
    },
    setNav(state, data) {
        var checkLive = sortItems(data);
        var populate = checkLive[0].nav_items;
        state.nav = populate;
        // console.log(data);
    },
    setPages(state, data) {
        let sitewide = state.sitewide;
        for (var p in data) {
            let page = data[p];
            let name = page.name;
            state.pages[name] = page;
            state.pages[name].pagewidgets = {};
            for (let w in page.widgets) {
                let widget = page.widgets[w];
                let type = widget.type;
                //BELOW SETS CLASS NAMES AND PARSED STYLES FOR WIDGETS, ETC.
                widget.classes = [];
                widget.classes.push(type);
                widget.parsedStyles = {};
                widget.attributes = {};
                let widget2 = widget;
                if ("styles" in widget) {
                    widget2 = setStyles(widget, state.colors);
                }
                //BELOW SETS SUB CLASS NAMES AND PARSED STYLES FOR INNER WIDGETS, ETC.
                if ("list" in widget) { //ADD NAMES HERE WHERE SUBCLASSES NEED TO BE FOUND
                    for (let l in widget.list) {
                        let listitem = widget.list[l];
                        let listitem2 = listitem;
                        listitem.classes = [];
                        listitem.parsedStyles = {};
                        if ("styles" in listitem) {
                            listitem2 = setStyles(listitem, state.colors, type);
                        }
                    }
                }
                //KEEP BELOW - CHANGES NAME OF COMPONENT TO VUE STYLE NAME
                let componentName = widget2.type.split(" ");
                for (let i = 0; i < componentName.length; i++) {
                    componentName[i] = componentName[i][0].toUpperCase() + componentName[i].slice(1);
                }
                componentName.join(" ");
                widget2.componentName = componentName[0];
            }
        }
    }
};

export const getters = {
    colors: state => state.colors,
    sitewide: state => state.sitewide,
    nav: state => state.nav,
    pages: state => state.pages
};

export const actions = {
    async nuxtServerInit({ commit }) {
        var datas = await require.context('~/assets/content/colors/', false, /\.json$/);
        var d = datas.keys().map(key => {
            let res = datas(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setColors', d);

        var datas = await require.context('~/assets/content/sitewide/', false, /\.json$/);
        var d = datas.keys().map(key => {
            let res = datas(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setSitewide', d[0]);

        var datas = await require.context('~/assets/content/nav/', false, /\.json$/);
        var d = datas.keys().map(key => {
            let res = datas(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setNav', d);

        var datas = await require.context('~/assets/content/pages/', false, /\.json$/);
        var d = datas.keys().map(key => {
            let res = datas(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setPages', d);
    }
};