import { useDrop } from "react-dnd"

const Bin = ({binnedItems}) => {
    const [{ canDrop, isOver }, drop] = useDrop(
        () => ({
            accept: 'notes',
            drop: () => ({ name: 'the bin' }),
            collect: (moniter) => ({
                isOver: !!moniter.isOver(),
                canDrop: !!moniter.canDrop(),
            })
        }), [],
    )
    return (
        <div className='border h-48 border-red-500 rounded-lg' ref={drop}>
            <h2 className='text-center text-xl font-bold py-2'>Bin</h2>
            <ul className="flex items-center flex-col">
                {binnedItems.map((item,i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Bin