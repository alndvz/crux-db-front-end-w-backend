(ns articles.views
  (:require
   [re-frame.core :as re-frame]
   [articles.events :as events]
   [articles.routes :as routes]
   [articles.subs :as subs]))


;; home

(defn home-panel [route-params]
  (let [name (re-frame/subscribe [::subs/name])]
    (println "route-params" route-params)
    [:div
     [:h1
      (str "Hello from " @name ". This is the Home Page.")]

     [:div
      [:a {:on-click #(re-frame/dispatch [::events/navigate [:about]])}
       "go to About Page"]]]))

(defmethod routes/panels :home-panel [_ route-params] [home-panel route-params])

;; about

(defn about-panel []
  [:div
   [:h1 "This is the About Page."]

   [:div
    [:a {:on-click #(re-frame/dispatch [::events/navigate [:home]])}
     "go to Home Page"]]])

(defmethod routes/panels :about-panel [] [about-panel])




;; main

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
