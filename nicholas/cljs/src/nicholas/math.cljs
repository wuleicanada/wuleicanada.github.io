(ns nicholas.math
  (:require [reagent.core :as r]))

(defn pick-one
  "Randomly pick one item from a collection"
  [col]
  (let [total (count col)
        random-index (rand-int total)]
    (get col random-index)))

(defn get-op []
  (pick-one [+ - *]))

(defn generate-a-b-op [min max]
  (let [span (- max min)
        op (get-op)
        a (+ min (rand-int span))
        b (
           condp = op
             + (+ min (rand-int span)) 
             - (+ min (rand-int (- a min)))
             * (rand-int 3))]
    {:a a :b b :op op}))

(defn format-number [num spaces]
  (let [padding (apply str (repeat spaces (char 160)))]
    (->> num
    (str padding)
    (reverse)
    (take spaces)
    (reverse)
    (apply str))))

(defn get-emoji []
  (let [emojis ["😀" "😃" "😄" "😁" "😆" "😅" "🤣" "😂" "🙂" "🙃" 
                "😉" "😊" "😇" "😍" "😘" "😗" "😚" "😙" "😋" "😛" 
                "😜" "🍇" "🍈" "🍉" "🍊" "🍋" "🍌" "🍍" "🍎" "🍏" 
                "🍐" "🍑" "🍒" "🍓" "🥝" "🍅" "🥑" "🍆" "🥔" "🥕" 
                "🌽" "🌶" "🥒" "🍄" "🥜" "🌰" "🍞" "🥐" "🥖" "🥞" 
                "🧀" "🍖" "🍗" "🥓" "🍔" "🍟" "🍕" "🌭" "🌮" "⚽"
                "❤️" "👍" "🖐️" "👨‍👨‍👧‍👦" "💡" "⛏️" "🛴" "🚲" "💯" "🏀"
                "🌈" "⭐" "☀️" "🌎" "🍄" "🌻" "🐠" "🐼" "🐷" "🐶"]]
    (pick-one emojis)))

(defn get-compliment []
  (let [compliments ["Good job!" "Great!" "Awesome!" "Excellent!" "You're so smart!" 
                     "Bon travail!" "Nice work!" "Gut gemacht!" "Ausgezeichnet!" "Well done!"
                     "So proud of you!" "You're the best!" "Yay!"]]
    (pick-one compliments)))

(defn question [min max]
  (let [data (r/atom (generate-a-b-op min max))
    {:keys [a b op]} @data]
    [:div.math.large
      [:p (format-number a 3)]
      [:p (condp = op
            + "+" 
            - "-"
            * "×")
        (format-number b 2)]
      [:hr]
      [:span (char 160)]     
      [:input.large.right 
        {:type "text"
         :size 2
         :on-key-press 
          (fn [e]
            (when (= 13 (.-charCode e))
              (let [my-answer (->> e .-target .-value (re-seq #"\d") (apply str) js/parseInt)]
                (when (= my-answer (op a b))
                  (js/alert (str (get-compliment) " " (get-emoji)))
                  (set! (.. e -target -value) "")
                  (reset! data (generate-a-b-op min max))))))}]]))
