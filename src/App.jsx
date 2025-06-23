import React from 'react';
import UppercaseColoredText from './components/UppercaseColoredText';
import CustomButton from './components/CustomButton';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Meu App com Componentes Personalizados</h1>
      
      {/* Seção do UppercaseColoredText */}
      <div style={{ marginBottom: '30px' }}>
        <h2>Textos Coloridos em Maiúsculo</h2>
        <UppercaseColoredText 
          text="Este texto ficará vermelho!" 
          textColor="red" 
        />
        <UppercaseColoredText 
          text="Este será azul" 
          textColor="blue" 
        />
        <UppercaseColoredText 
          text="Verde com hexadecimal" 
          textColor="#00AA00" 
        />
      </div>

      {/* Seção do CustomButton */}
      <div>
        <h2>Botões com Alertas</h2>
        <CustomButton label="Baixar CV" />
        <CustomButton label="Enviar Mensagem" />
        <CustomButton label="Salvar Arquivo" />
        <CustomButton label="Compartilhar" />
      </div>
    </div>
  );
}

export default App;