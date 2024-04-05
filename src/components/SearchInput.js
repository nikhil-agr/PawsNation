import { useRef, useState } from "react";


export const SearchInput = (props) => {

    const hoverOverMeRef = useRef(null);
    const showMeOnHoverRef = useRef(null);
    const showMeOnHoverRef2 = useRef(null);
    const showMeOnHoverRef3 = useRef(null);

    function handleMouseEnter() {
        showMeOnHoverRef.current.style.width = '100%';
        showMeOnHoverRef.current.style.borderTop = '1px solid black';
        showMeOnHoverRef.current.style.borderLeft = '1px solid black';
        showMeOnHoverRef.current.style.borderBottom = '1px solid black';
        showMeOnHoverRef2.current.textContent = 'Search by : ';
        showMeOnHoverRef2.current.style.width = '35%';
        showMeOnHoverRef3.current.style.width = '50%';
        showMeOnHoverRef.current.classList.toggle('bg-transparent');
        showMeOnHoverRef3.current.classList.toggle('bg-transparent');
    }

    function handleMouseLeave() {
        if (!inputValue) {
            setTimeout(() => {
                showMeOnHoverRef.current.classList.toggle('bg-transparent');
                showMeOnHoverRef3.current.classList.toggle('bg-transparent');
                showMeOnHoverRef.current.style.width = '0%';
                showMeOnHoverRef.current.style.border = 'none';
                showMeOnHoverRef2.current.textContent = '';
                showMeOnHoverRef2.current.style.width = '0%';
                showMeOnHoverRef3.current.style.width = '0%';
            }, 500);
        }
    }

    const [inputValue, setValue] = useState(props.var)
    const handleSearch = async (event) => {
        props.searchByFunc(showMeOnHoverRef3.current.value);
        event.preventDefault();
        if (event.target.value == "Name" || event.target.value == "Minimum Rating" || event.target.value == "Place") {
            return;
        }
        const inputValue = event.target.value;
        setValue(inputValue);
        props.varChange(inputValue);

    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={hoverOverMeRef} className="search__input border-solid border-slate-50 flex flex-row items-center gap-5 p-1 rounded-[15px] w-3/4 m-auto text-5xl justify-center text-center duration-1000">
            <div className="text-center duration-1000">🔍</div>
            <input type="text"
                style={{ width: `0%` }}

                id="inputId"
                ref={showMeOnHoverRef}
                placeholder=""

                value={inputValue ?? ""} onChange={handleSearch}

                className="rounded-xl duration-1000 bg-transparent h-11 text-2xl showMeOnHover border-white outline-none py-3 pl-2 pr-3 text-center" />
            <label className="text-neutral-50 font-semibold text-3xl" for="cars" ref={showMeOnHoverRef2}></label>

            <select onChange={handleSearch} className="rounded-xl bg-transparent text-gray-50 text-2xl px-2" ref={showMeOnHoverRef3} style={{ width: '0%' }} name="cars" id="cars">
                <option value="Name">Name</option>
                <option value="Place">Place</option>
                <option value="Minimum Rating">Minimum Rating</option>
            </select>
        </div>
    )
}