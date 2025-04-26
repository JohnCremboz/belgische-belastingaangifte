import React from 'react';
import Calculator from './components/Calculator';

// Voeg een eenvoudige nav bar component toe binnen App
const NAV_VAKKEN = Array.from({ length: 22 }, (_, i) => `Vak ${i + 1}`);

const App: React.FC = () => {
    return (
        <div>
            <h1>Belastingsaangifte Calculator</h1>
            <nav style={{ marginBottom: '1rem', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                {NAV_VAKKEN.map((vak, idx) => (
                    <button
                        key={vak}
                        style={{
                            marginRight: 4,
                            padding: '0.5em 1em',
                            borderRadius: 4,
                            border: '1px solid #ccc',
                            background: '#f7f7f7',
                            cursor: 'pointer'
                        }}
                        // onClick={() => { /* Navigatie logica kan hier */ }}
                    >
                        {vak}
                    </button>
                ))}
            </nav>
            <Calculator />
        </div>
    );
};

export default App;