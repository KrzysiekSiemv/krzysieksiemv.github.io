export interface Properties {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const EmailTemplate: React.FC<Properties> = ({ name, email, subject, message }) => {
    return (
      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5', color: '#333' }}>
        <h1>Nowa wiadomość od {name} - {email}</h1>
        <h2>Temat: {subject}</h2>
        <p>{message}</p>
      </div>
    );
  };