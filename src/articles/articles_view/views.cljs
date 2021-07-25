(ns articles.articles-view.views
  (:require [articles.articles-view.subs :as subs]
            [articles.routes :as routes]
            [re-frame.core :as re-frame]))


(defn article-view [{:keys [title image-url author body tags date-created]}]
  [:div
   [:img {:src image-url}]
   [:h1.title title]
   [:h2.subtitle.mb-1 (str "By: " author)]
   [:h3.subtitle.is-6.mt-0 date-created]
   (map (fn [tag]
          [:span.tag.is-success.mr-2 {:key tag} tag]) tags)
   [:article.content.mt-5 body]])

(defn view-article-panel [route-params]
  (let [selected-article @(re-frame/subscribe [::subs/select-article (int (:id route-params))])]
    [article-view selected-article]))


(defmethod routes/panels :view-article-panel [_ route-params] [view-article-panel route-params])



