(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [om_basic.core]))
(figwheel.client/start {:load-warninged-code true, :on-jsload (fn [& x] (if js/om_basic.core.on-js-reload (apply js/om_basic.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'om_basic.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

