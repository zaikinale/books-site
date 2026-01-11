export default function SettingsFrom () {

    return (
        <form className="mb-3">
            <div className="row">
                <div className="col-md-3">
                    <label for="fontFamily" className="form-label">Шрифт</label>
                    <select className="form-select" id="fontFamily" onchange="updateStyles()">
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Times New Roman, serif">Times New Roman</option>
                        <option value="Courier New, monospace">Courier New</option>
                        <option value="Georgia, serif">Georgia</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="fontSize" className="form-label">Размер текста</label>
                    <select className="form-select" id="fontSize" onchange="updateStyles()">
                        <option value="12px">12px</option>
                        <option value="14px">14px</option>
                        <option value="16px">16px</option>
                        <option value="18px">18px</option>
                        <option value="20px">20px</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="backgroundColor" className="form-label">Цвет фона</label>
                    <select select className="form-select" id="backgroundColor" onchange="updateStyles()">
                        <option value="#ffffff">Белый</option>
                        <option value="#f8f9fa">Светло-серый</option>
                        <option value="#e9ecef">Серый</option>
                        <option value="#343a40">Темный</option>
                        <option value="#fff3cd">Светло-желтый</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="textColor" className="form-label">Цвет текста</label>
                    <select className="form-select" id="textColor" onchange="updateStyles()">
                        <option value="#000000">Черный</option>
                        <option value="#343a40">Темно-серый</option>
                        <option value="#ffffff">Белый</option>
                        <option value="#007bff">Синий</option>
                        <option value="#dc3545">Красный</option>
                    </select>
                </div>
            </div>
        </form>
    )
}