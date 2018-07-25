import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";

const Logo = () => (
    <div className="ma4 mt0">
        <Tilt
            className="Tilt br2 shadow-2"
            options={{ max: 55 }}
            style={{ height: 150, width: 150 }}>
            <div className="Tilt-inner">
                <img
                    alt="logo"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAa4SURBVGhD1ZkFqC1VFIav3Y3dXSg2dndidweY2B1PRRQbO7ATVERsDMRELGzsxu5uv++8u3AxzJk9512fnPvDx2H27JnZsfbaa+0zMJo0BuwGz8KP8CYcDxPDsNG4cCv8XcOLMBMMC10NdZ0IXoC+n5mtITf6Xbgenkllch70rRzljyEaeyKMDaHNwfXivT9gUehLHQDRiVMsqNEG8CdY52YL+k1jwntgA/VUeSaqugCsZ4fmsKCftDrYOE1mKQsaNDmECY6woJ90BdiwGzpXZe0D1n+jc/U/SJ+/PDjiK8B8MCFkaVafgg1b0YIWmhS+B5/xnVma5WywNMR35wK/05OmgNPhE/BDVbRtR/JG2BM2A8tfgV50Mfic3k23fQk8B79C/l7wHTjzc0NRs8L7UPeiEg/D4tBGs8BFUPeeErrwtaBRD0J+yNG5BoybnGYbuhJsCPuDo/oF5GcMQw4BZzZrHNgW/Ea44OBaOAo2hSXA7ywJW8KZ8CXk+l9D1+jAUcqVP4A5oSTN7DVYBc6CcMM/wPlgw46Aj8Dyb8AwRpO8arBsRmiSjb4fom2iOdZqGcgV14eSJgJHV9sNuSidvdshv+95cEYmgNCu4L01O1fNmgp+g3jfwVCreSAqiTNUknuGdV30IRuqaWlyP4OmqVfTTN0Mp4fQQuDzB3auyorZlh0tqJNu7zOIiotBSY6wdV03anv4EGy0ZhUm48zZuc/BxWpuMj4Y8v8OF0JJznS4bJkfuuociIp+uKTDwLrLwb3wF1wOM0OdtHUXtZ2JdfU63AElua9E2wyDGqX7/QWs/BY4Yk1y1K37E7joV4aqqhuoMsZy8dpxzc8cpaTrIDqioyjqVIgHDCW6aV6w8ZrGaZAXsTuxHincpo29G3JHTYd3hq/AgVgbumkRCJf9KPhsUdruy+BD7u5TQlW7QNjrLRYkrQu6Xu9VcQY0rax9Ie6dAeNBlo0O1+t7HaTW0psYEvjwXRAjYCf1QpY/AS+Bm1lIzxfJUxNudKHdwTLXlr9PQc7r3YPiue0s6FXu3oblvuAYmAGeHLz2o47cI6BLDV0J8dEmPFUJbQOW6ZWcHU3VMN99bVWINpwMoyw3LKfcl0UQeQKE3OQ0h5D2Ho0tsSCojcDryTpXIwfQNaXTiTV2GbRaF00y1omPV/293iZGSu8U9doQgd964LUJVygfYmgFY8GQZOBmbOQL9Rravx8O2RG9XEjvEw0oEZFydCRmxMX8DljmN7UIg9ZR1gIQpnITaK/uzMY7ei31OOQ1cg9EQ5vwvUbDKtaIe5abnuvDdbLfIN7TtLeCnmWA5h7hS14FMzrlRmaYbrlRgB1xgYfcJxxB7zeRXbCDYpmxU6yLNSBkAud9rUEL6UkRuWoqzkyWcZOLz/s22g9l2UjvdeNOyDZvwBn3HgOjiyzDGsMZ73vgFyZYlPYYL872X5VT/S0YaOZ1ozyMM8SJ94jJ0JGQj4r0XMZNDshJ0O0YSU8W79H1FzUJxEGCdlzN8qq6FOIDHo1OA1nOpmaiScSaUK6HYyHyc0e8JM3YunbaZK1Rh0M0rM0GdBxYdw9wkZqD7ARNJx6eyujtXA9utK7B+6AkTymjbcVoOWxR/GBJBn3WNcFyHzCH12V6omIYkjukRzLUt755u0Gn912HbczFSCIyRL3YdFArc4johLTJEPVS1t2hczVSC0M4Cz2csZQL3GtnwpENzQ6WH925KitniFtYUKdlISqJB2MlTQ3WPbtz9a/0LNW462nw4C0rzsQ27lw1y4A1Z4iHQq1MHaOSeE6lqy3JtWEYYd1NwAQodnhnwHzcXMRFqtm5HpylacE4zXptQnMP8nL7jANrZVCW14i8DQeBiY0eTNwDzMU9HnWN6Nu1WQM9n9GOb4PVIMuBMlbLIY8dtoN7g97NDVcXrFfzW5q3rtzO53a58zceIXmI0O3IsoS5t/+RVF1wVWaSHlo8BHXvaUNXs8rSR7vD1r0g42mJSVVExw9ALxoBPucfPsZrZqXOTv5GFfOYnmMuTxl1oZ6U6FX81ZQ0mTzqukUXoY3QpbaR5hMnj7rlkBuy1x4rubbcNOO7Hk8NOScpKdyts9NGOgXru4EOOdf4LxWhuHl+6RzX2TC+sn5OAfpCZodxWFE9Vakq/2lqXt53ij1Buh2guV/Epube05fSpGIvMQlaB7I8KtLrRGcNzftWRrPRUDc8Q/u94FzI4YXBY19LVxxnX90wETNY7Ht5SuguX9cJM8r4C2JYyDjJf7GMiaIT7vzV/H/YyGTL8yuPW0ejBgb+AaCfwUJjCaAtAAAAAElFTkSuQmCC"
                />
            </div>
        </Tilt>
    </div>
);

export default Logo;