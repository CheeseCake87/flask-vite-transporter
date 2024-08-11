import subprocess


class TestDummy:
    y: bool = True


def test_compile_vite_apps():
    from vite_transporter.utilities import PyProjectConfig
    from vite_transporter.utilities import compile_vite_apps
    from vite_transporter.utilities import load_vite_apps

    with PyProjectConfig() as pyproject_config:
        vite_apps_found = load_vite_apps(pyproject_config)

        p = TestDummy()

        assert compile_vite_apps(pyproject_config, vite_apps_found, p) is True


def test_list_vite_apps():
    p = subprocess.run(["vt", "list"], stdout=subprocess.PIPE)
    terminal_output = p.stdout.decode("utf-8")
    assert (
            "\x1b[92mfrontend/dist/assets\x1b[0m \x1b[1m=>\x1b[0m \x1b[92mapp_flask/vt/frontend/\x1b[0m"
            in terminal_output
    )


def test_app_flask(client):
    response = client.get("/")
    assert response.status_code == 200
