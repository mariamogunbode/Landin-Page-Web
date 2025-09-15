import { bagaimana } from "../data/bagaimana";
import './section4.css'

export function Section4() {
  return (
    <>
      <div className="section4-container">
        <div className="bagaimana-kata">Bagaimana Kata Pelanggan?</div>
        <div className="bagaimana-container">
          {bagaimana.map((bagai) => {
            return (
              <>
                <div className="paragraph-author">
                <div className="bagai-paragraph">
                  <div>{bagai.message}</div>
                  <div className="bagai-authour">{bagai.author}</div>
                </div>
                </div>

              </>
            );
          })}

        </div>

      </div>
    </>
  );
}