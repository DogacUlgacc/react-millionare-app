export default function Pyramid({ questionNumber, moneyPyramid }) {
    return (
        <div className="pyramid">
            <ul className="moneyList">
                {moneyPyramid.map(
                    (m) =>
                        m.id !== 0 && (
                            <li
                                key={m.id}
                                className={
                                    questionNumber === m.id - 1
                                        ? "moneyListItem active"
                                        : "moneyListItem"
                                }
                            >
                                <span className="moneyListItemQuestion">
                                    {m.id}
                                </span>
                                <span className="moneyListItemAmount">
                                    {m.amount}
                                </span>
                            </li>
                        )
                )}
            </ul>
        </div>
    );
}
