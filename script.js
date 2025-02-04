(function () {
    console.log("inside custom script");
    let url = window.location.href;
    console.log("Current URL", url);
    // Sample URL with payload
    if ( (url.includes('pwa/live/x1545629713127') || url.includes('pwa/live/x1545990126801') || url.includes('pwa/live/x1545990145814')) && url.includes('triggerJourney')) {
        console.log("Current URL", url);
        if (url.includes('?')) {
            let paramString = url.split('?')[1]; 
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
                            value = 'renewal-direct_nvyzlq'
                            //ym.triggerJourney=renewal-direct&ym.payload=OG-21-2401-1802-00010477_9459433707
                        }
                        if (value == 'ckyc-direct') {
                            value = 'ckyc-direct_dovdpn'
                            //https://app.yellowmessenger.com/pwa/live/x1545629713127?ym.triggerJourney=ckyc-direct
                        }
                        
                        if (value == 'comm-update') {
                            value = 'comm-update_glrvtg'
                           //https://app.yellowmessenger.com/pwa/live/x1545629713127?ym.triggerJourney=comm-update&ym.payload=OG-22-9906-1843-00013987
                        }
                        if (value == 'post-registration') {
                            value = 'post-registration_zabfhp'
                           //https://app.yellow.ai/pwa/live/x1545629713127?ym.triggerJourney=post-registration&ym.payload=OC-23-1202-1801-00001800
                        }
                        if (value == 'post-survey') {
                            value = 'post-survey_wosokz'
                           //https://app.yellow.ai/pwa/live/x1545629713127?ym.triggerJourney=post-survey&ym.payload=OC-23-1202-1801-00001800
                        }

                        if (value == 'nmca-direct') {
                            value = 'nmca-direct_qhveud'
                           //https://app.yellowmessenger.com/pwa/live/x1545629713127?ym.triggerJourney=nmca-direct
                        }
    
                        journey_param = `${key}=${value}`
                    }
                    if (key == 'ym.payload') {
                        //Passing same payload in updated url
                        payload_param = params_arr[i];
                    }
                }
            }
            window.location = `https://cloud.yellow.ai/pwa/v2/live/x1714103142268?${journey_param}&${payload_param}`
        } else {
            window.location = `https://cloud.yellow.ai/pwa/v2/live/x1714103142268`
        }
    }else if(url.includes('pwa/live/x1545629713127') || url.includes('pwa/live/x1545990126801') || url.includes('pwa/live/x1545990145814') ){
        window.location = `https://cloud.yellow.ai/pwa/v2/live/x1714103142268`
    }

})();
