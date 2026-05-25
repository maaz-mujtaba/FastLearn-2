const LoginPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <div className="card">
        <h2 className="text-2xl font-bold mb-6">Login to fastlearn</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm mb-2">Email</label>
            <input type="email" className="input w-full" />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2">Password</label>
            <input type="password" className="input w-full" />
          </div>
          <button type="submit" className="btn-primary w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;