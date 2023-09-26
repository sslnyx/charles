import AOS from "aos";

const aosInit = () => {
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
        initClassName: "aos-init", // class applied after initialization
        animatedClassName: "aos-animate", // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1200, // values from 0 to 3000, with step 50ms
        easing: "ease", // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
}

const setViewHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};

const fetchApi = async (link) => {
    try {
        const res = await fetch(link, { method: "GET" })
        const data = await res.json();
        return data;
    } catch (errors) {
        console.log(errors)
    }
}

function fitBoundsWithPadding(gMap, bounds, paddingXY) {
    let projection = gMap?.getProjection();
    if (projection) {

        // console.log("bounds fit")

        // if (!$.isPlainObject(paddingXY))
        //     paddingXY = { x: 0, y: 0 };

        let paddings = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };

        if (paddingXY.left) {
            paddings.left = paddingXY.left;
        } else if (paddingXY.x) {
            paddings.left = paddingXY.x;
            paddings.right = paddingXY.x;
        }

        if (paddingXY.right) {
            paddings.right = paddingXY.right;
        }

        if (paddingXY.top) {
            paddings.top = paddingXY.top;
        } else if (paddingXY.y) {
            paddings.top = paddingXY.y;
            paddings.bottom = paddingXY.y;
        }

        if (paddingXY.bottom) {
            paddings.bottom = paddingXY.bottom;
        }

        // copying the bounds object, since we will extend it
        bounds = new google.maps.LatLngBounds(bounds.getSouthWest(), bounds.getNorthEast());

        // SW
        let point1 = projection.fromLatLngToPoint(bounds.getSouthWest());


        // we must call fitBounds 2 times - first is necessary to set up a projection with initial (actual) bounds
        // and then calculate new bounds by adding our pixel-sized paddings to the resulting viewport
        gMap.fitBounds(bounds);

        let point2 = new google.maps.Point(
            ((typeof (paddings.left) == 'number' ? paddings.left : 0) / Math.pow(2, gMap.getZoom())) || 0,
            ((typeof (paddings.bottom) == 'number' ? paddings.bottom : 0) / Math.pow(2, gMap.getZoom())) || 0
        );

        let newPoint = projection.fromPointToLatLng(new google.maps.Point(
            point1.x - point2.x,
            point1.y + point2.y
        ));

        bounds.extend(newPoint);

        // NE
        point1 = projection.fromLatLngToPoint(bounds.getNorthEast());
        point2 = new google.maps.Point(
            ((typeof (paddings.right) == 'number' ? paddings.right : 0) / Math.pow(2, gMap.getZoom())) || 0,
            ((typeof (paddings.top) == 'number' ? paddings.top : 0) / Math.pow(2, gMap.getZoom())) || 0
        );
        newPoint = projection.fromPointToLatLng(new google.maps.Point(
            point1.x + point2.x,
            point1.y - point2.y
        ));

        bounds.extend(newPoint);

        gMap.fitBounds(bounds);

    }
}





export { aosInit, setViewHeight, fetchApi, fitBoundsWithPadding }
