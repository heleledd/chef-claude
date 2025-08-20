import '../styles/Main.css';

export default function Main() {
    return (
        <main>
            <form className="add-ingredient-form">
                <input 
                    aria-label="Add ingredient" 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="e.g butternut squash"
                />
                <button type="submit">Add ingredient</button>
            </form>
        </main>
    )
}