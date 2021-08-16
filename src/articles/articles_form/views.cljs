(ns articles.articles-form.views
  (:require [articles.routes :as routes]
            [re-frame.core :as re-frame]
            [articles.articles-form.events :as events]
            [articles.articles-form.subs :as subs]
            [articles.form.views :refer [text-input text-area select-input]]
            [articles.form.subs :as form-subs]))


(defn image-display []
  (when-let [image-url @(re-frame/subscribe [::form-subs/form :image-url])]
    [:img {:src image-url}]))


(defn tag-list []
  (let [tags @(re-frame/subscribe [::subs/tag-list])]
    [:div.mt-2
     (map (fn [tag]
            [:span.tag.is-success.mr-2 {:key tag} tag
             [:button.delete.is-small {:on-click #(re-frame/dispatch [::events/remove-article-tag tag])}]]) tags)]))

(defn add-tag-input []
  [:div
   [:label "Tags"]
   [:div.columns
    [:div.column.is-one-third
     (text-input :tag "")]
    [:div.column.is-narrow.is-align-self-center.is-clickable
     {:on-click #(re-frame/dispatch [::events/save-article-tag])}
     "➕"]]])

(defn article-form []
  (let [edit-id @(re-frame/subscribe [::subs/edit-id])
        form-valid? @(re-frame/subscribe [::form-subs/form-is-valid? [:title :excerpt :image-url :body :author :tags]])]
    [:div
     [:h1.title "Create an article"]
     [:hr]
     [:div.columns
      [:div.column.is-half
       (text-input :title "Title")
       (text-input :excerpt "Excerpt")
       (text-input :image-url "Image url")
       (image-display)
       (text-area :body "Body")
       (select-input :author "Author" ["On the code again" "Allan" "Jeremy Mags"])
       (add-tag-input)
       (tag-list)
       [:button.button.is-primary.mt-4 {:disabled (not form-valid?)
                                        :on-click #(re-frame/dispatch [::events/save-article edit-id])} (if edit-id "Update" "Save")]]]]))

(defn create-article-panel []
  (re-frame/dispatch [::events/initialise-create])
  [article-form])


(defmethod routes/panels :create-article-panel [] [create-article-panel])


(defn edit-article-panel [route-params]
  (re-frame/dispatch [::events/initialise-edit (:id route-params)])
  [article-form])



(defmethod routes/panels :edit-article-panel [_ route-params] [edit-article-panel route-params])



