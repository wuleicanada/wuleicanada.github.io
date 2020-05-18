(ns nicholas.core
  (:require [reagent.dom :as rdom]
            [nicholas.math :as m]))

(defn app []
  [:div.container
   [m/question 0 12]])

(defn ^:export main []
  (rdom/render
    [app]
    (.getElementById js/document "app")))

