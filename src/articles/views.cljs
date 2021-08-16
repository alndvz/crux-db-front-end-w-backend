(ns articles.views
  (:require
   [re-frame.core :as re-frame]
   [articles.events :as events]
   [articles.routes :as routes]
   [articles.subs :as subs]))


(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])
        route-params (re-frame/subscribe [::subs/route-params])]
    [:div
     [:nav.navbar.is-dark.is-spaced
      [:div.navbar-start
       [:a.navbar-item {:on-click #(re-frame/dispatch [::events/navigate [:create-article]])} "Create Article"]
       [:a.navbar-item {:on-click #(re-frame/dispatch [::events/navigate [:articles-index]])} "View Articles"]]]
     [:div.container.is-max-widescreen.mt-5
      [:div (routes/panels @active-panel @route-params)]]]))
