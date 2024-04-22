(function () {
    console.log("inside custom script");
    // window.addEventListener("message", function (event1) {
    //     try {
    //         let event = JSON.parse(event1.data);
    //         console.log("custom script event", event);
    //         if (event.event_code == 'connected') {
    //             console.log("Found Event", event);

                let url = window.location.href;
                console.log("Current URL", url);
                // Sample URL with payload
                //url = "https://app.yellowmessenger.com/pwa/live/x1545990126801?ym.triggerJourney=renewal-direct&ym.payload=OG-21-2401-1802-00010477_9459433707"
                if (url.includes('pwa/live/x1612509851864')) {
                    console.log("Current URL", url);
                    if (url.includes('?')) {
                        let paramString = url.split('?')[1]; //ym.triggerJourney=renewal-direct&ym.payload=OG-21-2401-1802-00010477_9459433707
                        let params_arr = paramString.split('&');

                        let journey_param = '', payload_param = ''
                        for (let i = 0; i < params_arr.length; i++) {
                            let pair = params_arr[i].split('='); //ym.triggerJourney=renewal-direct
                            if (pair.length == 2) {
                                let key = pair[0]; //ym.triggerJourney
                                let value = pair[1]; //renewal-direct
                                console.log("Key :" + key);
                                console.log("Value :" + value);

                                if (key == 'ym.triggerJourney') {
                                    //Journey name might be different in new cloud bot, so we need to change journey name
                                    if (value == 'renewal-direct') {
                                        value = 'renewal-direct'
                                    }
                                    journey_param = `${key}=${value}`
                                }

                                if (key == 'ym.payload') {
                                    //Passing same payload in updated url
                                    payload_param = params_arr[i];
                                }
                            }
                        }

                        window.location = `https://app.yellowmessenger.com/pwa/v2/live/x1545629713127?${journey_param}&${payload_param}`
                    } else {
                        window.location = `https://app.yellowmessenger.com/pwa/v2/live/x1545629713127`
                    }
                }
            //}
        // } catch (error) {
        //     console.log(error, "Error occured");
        // }
    // }, false);
})();
