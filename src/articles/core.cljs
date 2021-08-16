(ns articles.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as re-frame]
   [articles.events :as events]
   [articles.articles-index.events :as article-events]
   [articles.routes :as routes]
   [articles.views :as views]
   [articles.articles-form.views]
   [articles.articles-view.views]
   [articles.articles-index.views]
   [articles.config :as config]))


(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [views/main-panel] root-el)))

(defn init []
  (routes/start!)
  (re-frame/dispatch-sync [::events/initialize-db])
  (re-frame/dispatch-sync [::article-events/load-articles])
  (dev-setup)
  (mount-root))
