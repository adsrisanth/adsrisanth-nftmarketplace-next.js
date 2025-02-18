import './footer.css';

export default function footer() {
    return(
        <div className="bg-[#2C2C2C]">
            <footer>
                <div className="flex gap-1 px-2 py-3 place-content-center">
                    <span>Designed and Developed</span>
                    <span className="text-red-500">Dinesh SriSanth Adari</span>
                </div>
            </footer>
        </div>
    );
}