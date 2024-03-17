{"mappings":"AAGA;;;;AAIA;;;;;;;AASA;EACE;;;;;AAKF;;;;;;;;;;;;;;;;AAgBA;;;;AAIA;;;;AAIA;;;;;;AAKA;;;;;AAKA;;;;;;AAMA;;;;;AAKA;;;;;;;;;;AASA;;;;AAIA;;;;;AAOA;;;;;;;;;AAUA;;;;;;;;AAQA;;;;AAGA;;;;;AAIA;;;;AAMA;;;;;AAKA;;;;;AAKA;;;;;AAKA","sources":["src/css/view-BMI.css"],"sourcesContent":["/*////////////\r\n// HOMEPAGE ////////////////////////////////////////////////////////\r\n////////////*/\r\n.bmi-view {\r\n  transition: all var(--transition-time-slow) ease;\r\n}\r\n\r\n.bmi-view .form--container {\r\n  display: grid;\r\n  grid-auto-flow: row;\r\n  /* grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr)); */\r\n  /* grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr)); */\r\n  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));\r\n  gap: 2rem;\r\n}\r\n\r\n@media (max-width: 320px) {\r\n  .bmi-view .form--container {\r\n    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));\r\n  }\r\n}\r\n\r\n.bmi-view .bmi--contaner {\r\n  min-height: 14rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: start;\r\n  padding: 1rem;\r\n  text-wrap: balance;\r\n  overflow: hidden;\r\n  border-radius: var(--border-radius);\r\n  box-shadow: var(--shadow-colors);\r\n  background-color: var(--sidebar-containers-bg-color);\r\n  transition: all var(--transition-time) ease;\r\n}\r\n\r\n.bmi-view .bmi--contaner:hover {\r\n  box-shadow: var(--shadow-colors-hover);\r\n}\r\n\r\n.bmi-view .bmi--form {\r\n  justify-content: center;\r\n}\r\n\r\n.bmi-view h2 {\r\n  color: var(--text-h1-color);\r\n  padding: 1rem 0;\r\n  font-weight: 800;\r\n}\r\n.bmi-view h1 {\r\n  font-size: 4rem;\r\n  color: var(--text-primary);\r\n}\r\n\r\n.bmi-view .form__row {\r\n  display: grid;\r\n  grid-auto-flow: row;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.bmi-view .form__label {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.bmi-view .form__input {\r\n  width: 100%;\r\n  padding-left: 1rem;\r\n  font-size: 1.5rem;\r\n  border: none;\r\n  border-bottom: var(--border-width) solid var(--text-h1-color);\r\n  background-color: var(--color-light--3);\r\n  transition: all var(--transition-time) ease;\r\n}\r\n.bmi-view .form__input:focus {\r\n  outline: none;\r\n}\r\n\r\n.bmi-view .btn {\r\n  margin-top: 1rem;\r\n  align-self: start;\r\n}\r\n\r\n/* result */\r\n\r\n.bmi-view .bmi-container-result {\r\n  text-align: center;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  border-left: 0.5rem solid;\r\n  border-color: green;\r\n}\r\n\r\n/* article */\r\n\r\n.bmi-view .article {\r\n  margin-top: 2rem;\r\n  padding: 1rem;\r\n  border-radius: var(--border-radius);\r\n  box-shadow: var(--shadow-colors);\r\n  transition: all var(--transition-time) ease;\r\n}\r\n\r\n.bmi-view .article:hover {\r\n  box-shadow: var(--shadow-colors-hover);\r\n}\r\n.bmi-view ul {\r\n  list-style-position: outside;\r\n  padding-left: 1rem;\r\n}\r\n.bmi-view li {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n/* formula */\r\n\r\n.bmi-view .formula {\r\n  font-size: 1.2rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.bmi-view .fraction {\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n.bmi-view .line {\r\n  display: block;\r\n  border-top: 0.15rem solid #000;\r\n}\r\n\r\n.bmi-view .weight,\r\n.bmi-view .height {\r\n  display: block;\r\n  padding: 0.4rem;\r\n}\r\n"],"names":[],"version":3,"file":"index.7ad9d85d.css.map","sourceRoot":"/__parcel_source_root/"}