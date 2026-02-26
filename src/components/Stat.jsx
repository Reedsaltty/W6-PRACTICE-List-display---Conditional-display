export default function Stat ({Score}){
    const scores = Score.map(element => element.score); // ← add this

    return(
        <div className="Statistic">
            <div>
                <div>Average</div>
                <div>
                    <CalculatedAver number={scores} />
                </div>
            </div>
            <div>
                <div>Minimum</div>
                <div> <CalculatedMin number={scores} /></div>
               
            </div>
            <div>
                <div>Maximum</div>
                <div><CalculatedMax  number={scores} /></div>
            </div>
        </div>
    );
}
function CalculatedAver ({number}){
    let sum = number.reduce((initiate, cur) => initiate + cur ,0) ;
    return sum / number.length ;
}
function CalculatedMin ({number}){
    let minNumber = number[0] ;
    number.forEach(element => {
        if (element < minNumber){
            minNumber = element;
        }
    });
    return minNumber;
}
function CalculatedMax ({number}){
    let maxNumber = number[0] ;
    number.forEach(element => {
        if (element > maxNumber){
            maxNumber = element;
        }
    });
    return maxNumber;
}
