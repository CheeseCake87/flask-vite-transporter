import subprocess


def test_compile_vite_apps():
    p = subprocess.Popen(["vt", "compile", "-y"], stdout=subprocess.PIPE)
    p.wait()
    terminal_output = p.stdout.read().decode("utf-8")
    assert "Compilation complete." in terminal_output


def test_list_vite_apps():
    p = subprocess.Popen(["vt", "list"], stdout=subprocess.PIPE)
    p.wait()
    terminal_output = p.stdout.read().decode("utf-8")
    assert (
            "\x1b[92mfrontend/dist/assets\x1b[0m \x1b[1m=>\x1b[0m \x1b[92mapp_flask/vt/frontend/\x1b[0m"
            in terminal_output
    )


def test_app_flask(client):
    response = client.get("/")
    assert response.status_code == 200