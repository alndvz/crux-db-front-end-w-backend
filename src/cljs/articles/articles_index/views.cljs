(ns articles.articles-index.views
  (:require [re-frame.core :as re-frame]
            [articles.routes :as routes]
            [articles.events :as events]
            [articles.articles-index.subs :as subs]))


(defn article-card [{:keys [article/id article/title article/author article/image-url article/excerpt article/date-created]}]
  [:div.column.is-one-third {:key id}
   [:div.card.article-card
    [:div.card-image
     [:figure.image.is-4by3
      [:img {:src image-url :alt "Placeholder image"}]]]
    [:div.card-content
     [:div.media
      [:div.media-left
       [:figure.image.is-48x48
        [:img {:src "https://bulma.io/images/placeholders/96x96.png", :alt "Placeholder image"}]]]
      [:div.media-content
       [:p.title.is-4 title]
       [:p.subtitle.is-6 (str "by: " author)]]]
     [:div.content excerpt
      [:br]
      [:div (str "posted: " date-created)]]
     [:footer.card-footer
      [:a.card-footer-item {:on-click #(re-frame/dispatch [::events/navigate [:view-article :id id]])} "View"]
      [:a.card-footer-item {:on-click #(re-frame/dispatch [::events/navigate [:edit-article :id id]])} "Edit"]]]]])



(defn articles-index-panel []
  (let [all-articles @(re-frame/subscribe [::subs/articles])
        partitioned-articles (partition 3 3 [nil] all-articles)]
    [:div
     [:h1.title "articles"]
     (map-indexed (fn [i articles]
                    [:div.columns.is-desktop {:key (str "article" i)}
                     (map (fn [article] (when article (article-card  article))) articles)])
                  partitioned-articles)]))


(defmethod routes/panels :articles-index-panel [] [articles-index-panel])
