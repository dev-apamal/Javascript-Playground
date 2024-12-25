export default function Search(props){
    return (
        <main>
            <form>
                <input type="text" placeholder="eg.oregano" name="ingredient" id="ingredient"/>
                <input type="submit" value="+ Add Ingredient"/>
            </form>
        </main>
    )
}