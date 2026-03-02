import type { CellValueChangedEvent, ColDef } from "ag-grid-community";
import { themeAlpine } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";

// Row Data Interface
interface IRow {
    check: boolean;
    name: string;
    email: string;
    payroll: boolean;
}

interface AgGridTableProps {
    value: {
        rowData: IRow[];
        columnDefs: ColDef<IRow>[];
    };
    config?: Omit<AgGridReact, 'rowData' | 'columnDefs'>;
    onChange: (data: IRow[]) => void;
}

// Create new GridExample component
const AgGridTable = (props: AgGridTableProps) => {

    const [rowData] = useState<IRow[]>(props.value?.rowData);
    const [colDefs] = useState<ColDef<IRow>[]>(props.value?.columnDefs);

    const defaultColDef: ColDef = {
        flex: 1,
    };

    const handleCellChange = (event: CellValueChangedEvent<IRow>) => {
        const updatedData = event.api.getRenderedNodes().map(node => node.data).filter((data): data is IRow => data !== undefined);
        if (updatedData) {
            props.onChange(updatedData);
        }
    };

    // Container: Defines the grid's theme & dimensions.
    return (
        <div style={{ width: "100%", height: "400px" }}>
            <AgGridReact
                {...props.config}
                rowData={rowData}
                columnDefs={colDefs}
                defaultColDef={defaultColDef}
                onCellValueChanged={handleCellChange}
                theme={themeAlpine}
            />
        </div>
    );
};

export default AgGridTable;