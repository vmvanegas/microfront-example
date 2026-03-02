import Grid from '@mui/material/Grid'
import { DynamicForm } from './components/DynamicForm'
import { Paper } from '@mui/material'
import FormModeRadio from './components/FormModeRadio'
import { useState } from 'react';
import type { FormMode } from './types/form.types';
import { AllCommunityModule } from 'ag-grid-community';
import { AgGridProvider } from 'ag-grid-react';


const modules = [AllCommunityModule];


function App() {

  const [formMode, setFormMode] = useState<FormMode>('Fiscal');

  const handleChange = (mode: FormMode) => {
    setFormMode(mode);
  }

  return (
    <AgGridProvider modules={modules}>
      <Grid container spacing={2} padding={2}>
        <Grid size={12} justifyItems={"center"}>
          <Paper component={'div'} elevation={24} sx={{ maxWidth: '600px', width: '100%', padding: 3 }}>
            <FormModeRadio onChange={handleChange} />
          </Paper>
        </Grid>
        <Grid size={12} justifyItems={"center"}>
          <Paper component={'div'} elevation={24} sx={{ maxWidth: '600px', width: '100%', padding: 3 }}>
            <DynamicForm mode={formMode} />
          </Paper>
        </Grid>
      </Grid>
    </AgGridProvider>
  )
}

export default App