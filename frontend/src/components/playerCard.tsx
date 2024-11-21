
export const WPlayerCard = ({time  , pieces} :{time : any , pieces : any})=>{
    if(pieces){
        console.log(pieces)
    }
    return (
        <div className="flex justify-between gap-2 ">
            <div className="flex gap-2">
            <img src={`../../photo/W playerCard.png`} alt="" className="flex-start w-12 h-12"/>
            <div className="col-span-2 flex flex-col gap-1">
                <div className="w-8 text-white">Player1</div>
                {pieces.map((piece: any) =>{
                    <div className="bg-red-600" key={`${piece.color}-${piece.piece}`}>
                       {piece.color === "b" && (
                                <img 
                                    src={`./${piece.piece}.png`} 
                                    alt={piece.piece} 
                                    className="w-6 h-6" 
                                />  
                            )}
                    </div>
                })}
            </div>
            </div>
            <div className="bg-white  flex justify-between  w-36 h-12 p-3  rounded-md">
                <div className="pt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="transform: rotate(0deg);"><path d="M5.48,9a.93.93,0,0,0-.3.71v.58a.94.94,0,0,0,.3.71,1,1,0,0,0,.71.3h4.58a1,1,0,0,0,.71-.3.94.94,0,0,0,.29-.71V9.7A.92.92,0,0,0,11.48,9a1,1,0,0,0-.71-.27H6.19A1,1,0,0,0,5.48,9Z"></path><path d="M19.22,6.1a9.9,9.9,0,0,0-2.14-3.18A10.23,10.23,0,0,0,13.9.78,9.76,9.76,0,0,0,10,0,9.86,9.86,0,0,0,6.1.78,10,10,0,0,0,.78,6.1,9.81,9.81,0,0,0,0,10a9.81,9.81,0,0,0,.78,3.9A10,10,0,0,0,6.1,19.22,9.86,9.86,0,0,0,10,20a9.76,9.76,0,0,0,3.89-.78,10.23,10.23,0,0,0,3.18-2.14,9.9,9.9,0,0,0,2.14-3.18A9.81,9.81,0,0,0,20,10,9.81,9.81,0,0,0,19.22,6.1ZM17.07,13a7.65,7.65,0,0,1-1.65,2.42A7.81,7.81,0,0,1,13,17.06a7.46,7.46,0,0,1-3,.6,7.51,7.51,0,0,1-3-.6,7.74,7.74,0,0,1-2.43-1.65A8,8,0,0,1,2.94,13a7.46,7.46,0,0,1-.6-3,7.46,7.46,0,0,1,.6-3A8,8,0,0,1,4.58,4.59,7.74,7.74,0,0,1,7,2.94a7.51,7.51,0,0,1,3-.6,7.45,7.45,0,0,1,3,.6,7.74,7.74,0,0,1,2.43,1.65A7.65,7.65,0,0,1,17.07,7a7.46,7.46,0,0,1,.6,3A7.46,7.46,0,0,1,17.07,13Z"></path></svg>
                </div>
                <div className="font-bold text-xl">{(Math.floor(time/60)).toString().padStart(2,'0') + " : " + (time%60).toString().padStart(2,'0') }</div>
            </div>
        </div>
    )
}

export const BPlayerCard = ({time  , pieces} :{time : any , pieces : any})=>{
    return (
        <div className="flex justify-between gap-2 ">
            <div className="flex gap-2">
            <img src={`../../photo/B playerCard.png`} alt="" className="flex-start w-12 h-12"/>
            <div className="col-span-2 flex flex-col gap-1">
                <div className="w-8 text-white">Player2</div>
                {pieces.map((piece: any) =>{
                    <div className="bg-red-600">
                        <img src={`"./${piece.color == "w" ? piece.piece.toUpperCase(): null} " copy.png"`} alt="./K copy.png" className="w-6 h-6" />
                    </div>
                     })}
            </div>
            </div>
            <div className="bg-white  flex justify-between  w-36 h-12 p-3  rounded-md">
                <div className="pt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="transform: rotate(0deg);"><path d="M5.48,9a.93.93,0,0,0-.3.71v.58a.94.94,0,0,0,.3.71,1,1,0,0,0,.71.3h4.58a1,1,0,0,0,.71-.3.94.94,0,0,0,.29-.71V9.7A.92.92,0,0,0,11.48,9a1,1,0,0,0-.71-.27H6.19A1,1,0,0,0,5.48,9Z"></path><path d="M19.22,6.1a9.9,9.9,0,0,0-2.14-3.18A10.23,10.23,0,0,0,13.9.78,9.76,9.76,0,0,0,10,0,9.86,9.86,0,0,0,6.1.78,10,10,0,0,0,.78,6.1,9.81,9.81,0,0,0,0,10a9.81,9.81,0,0,0,.78,3.9A10,10,0,0,0,6.1,19.22,9.86,9.86,0,0,0,10,20a9.76,9.76,0,0,0,3.89-.78,10.23,10.23,0,0,0,3.18-2.14,9.9,9.9,0,0,0,2.14-3.18A9.81,9.81,0,0,0,20,10,9.81,9.81,0,0,0,19.22,6.1ZM17.07,13a7.65,7.65,0,0,1-1.65,2.42A7.81,7.81,0,0,1,13,17.06a7.46,7.46,0,0,1-3,.6,7.51,7.51,0,0,1-3-.6,7.74,7.74,0,0,1-2.43-1.65A8,8,0,0,1,2.94,13a7.46,7.46,0,0,1-.6-3,7.46,7.46,0,0,1,.6-3A8,8,0,0,1,4.58,4.59,7.74,7.74,0,0,1,7,2.94a7.51,7.51,0,0,1,3-.6,7.45,7.45,0,0,1,3,.6,7.74,7.74,0,0,1,2.43,1.65A7.65,7.65,0,0,1,17.07,7a7.46,7.46,0,0,1,.6,3A7.46,7.46,0,0,1,17.07,13Z"></path></svg>
                </div>
                <div className="font-bold text-xl">{(Math.floor(time/60)).toString().padStart(2,'0') + " : " + (time%60).toString().padStart(2,'0') }</div>
            </div>
        </div>
    )
}