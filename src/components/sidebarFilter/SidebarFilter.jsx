import Form from 'react-bootstrap/Form';
import "../sidebarFilter/sidebarFilter.css";

const SidebarFilter = () => {
    return (
        <div className="sidebar-filter border p-4 rounded">
            <h6>Urutakan Berdasarkan</h6>
            <hr />
            <Form>
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type={type}
                            id={`default-${type}-1`}
                            name="filterOption"
                            label={`Pertanyaan Belum Terjawab`}
                        />
                        <Form.Check
                            type={type}
                            id={`default-${type}-2`}
                            name="filterOption"
                            label={`Pertanyaan Terbaru`}
                        />
                        <Form.Check
                            type={type}
                            id={`default-${type}-3`}
                            name="filterOption"
                            label={`Pertanyaan Terlama`}
                        />
                    </div>
                ))}
            </Form>
        </div>
    );
};

export default SidebarFilter;
