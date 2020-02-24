var routes = [
    {
        path: '',
        page: 'home.page.html'
    },
    {
        path: 'about',
        page: 'about.page.html'
    },
    {
        path: 'services',
        children: [
            {
                path: 'manufacturer',
                page: 's-manufacturer.page.html'
            },
            {
                path: 'suppliers',
                page: 's-suppliers.page.html'
            },
            {
                path: 'dealership',
                page: 's-dealership.page.html'
            },
            {
                path: 'govtsupplier',
                page: 's-govtsupplier.page.html'
            },
            {
                path: 'distributor',
                page: 's-distributor.page.html'
            },
            {
                path: 'homefurnishing',
                page: 's-homefurnishing.page.html'
            },
            {
                path: 'wallfitting',
                page: 's-wallfitting.page.html'
            },
            {
                path: 'officefitting',
                page: 's-officefitting.page.html'
            },
            {
                path: 'schoolfitting',
                page: 's-schoolfitting.page.html'
            }
        ]
    },
    {
        path: 'products',
        page: 'products.page.html'
    },
    {
        path: 'sizechart',
        page: 'size_chart.page.html'
    },
    {
        path: 'contactus',
        page: 'contact.page.html'
    }
];



$(document).ready(function () {

    var location = window.location.hash.split('#/')[1];
    routeChange(location);

    window.addEventListener('hashchange', (e) => {
        var location = window.location.hash.split('#/')[1];
        routeChange(location);
    });
});

function routeChange(location) {
    const root = $('#app');
    routes.map(el => {
        if (el.path == location) {
            root.load(el.page);
        } else if(el.hasOwnProperty('children')) {
            el.children.map(e => {
                if(e.path == location) {
                    root.load(e.page);
                }
            });
        }
    });
}