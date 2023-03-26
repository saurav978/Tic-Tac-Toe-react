

const Cell = ({id, cell, setCells, go, setGo, cells, winnigMassage})=>{
    const handleClick = (e)=>{
        const taken = e.target.firstChild.classList.contains("circle") || e.target.firstChild.classList.contains("cross")
        if (!taken){
            if (go === "circle"){
                e.target.firstChild.classList.add("circle")
                handelCellChange("circle")
                setGo('cross')
            }
            if (go === "cross"){
                e.target.firstChild.classList.add("cross")
                handelCellChange("cross")
                setGo("circle")
            }
        }
    }
    const handleNothing= ()=>{
        return
    }
    const handelCellChange = (className)=>{
        const nextCells = cells.map((cell, index)=>{
            if (index === id){
                return className
            }else{
                return cell
            }
        })
        setCells(nextCells)
    }
    return(
        <div className="square" id={id} onClick={!winnigMassage? handleClick : handleNothing}>
            <div className={cell}></div>
        </div>
    )
}

export default Cell