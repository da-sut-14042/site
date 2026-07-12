PYTHON ?= python3
VENV := .venv
MKDOCS := $(VENV)/bin/mkdocs

.PHONY: setup serve build

setup:
	$(PYTHON) -m venv $(VENV)
	$(VENV)/bin/python -m pip install --upgrade pip
	$(VENV)/bin/python -m pip install -r requirements.txt

serve:
	$(MKDOCS) serve

build:
	$(MKDOCS) build --strict
