## Component, Container and layout structure

| Components                       |                          Layout                          |                                 Container |
| -------------------------------- | :------------------------------------------------------: | ----------------------------------------: |
| Dummy                            |                    Imports components                    |                           Contains logics |
| Contains its own style           |                 Can import its own style                 |                                  No Style |
| Doesn't care where it's used     |                         No logic                         |                                     Redux |
| Doesn't not talk to translation  | Only passing props between <br> componets and containers |                              Translitions |
| Focus on reuse                   |                 Imports another layouts                  | Is a parent of layouts and <br>components |
| Prefered as functional component |                                                          |                                           | Api calls |
