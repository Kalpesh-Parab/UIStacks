const LoadingScreen = ({ progress }) => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <h1 style={{ letterSpacing: '0.2em' }}>UISTACKS</h1>

      <div style={{ marginTop: 30, width: 200 }}>
        <div
          style={{
            height: 2,
            width: `${progress}%`,
            background: '#fff',
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      <p style={{ marginTop: 20, opacity: 0.7 }}>
        Loading experience… {progress}%
      </p>
    </div>
  );
};

export default LoadingScreen;
