#!/usr/bin/python
from gi.repository import Gio
import os
import glib
import glob
import re

APP_ID = 'unity-webapps-slack-unofficial'

def get_local_applications_path():
    return os.path.join(glib.get_user_data_dir(), 'applications')

def update_desktop_file_startupwmclass():
    local_applications_path = get_local_applications_path()
    if not os.path.exists(local_applications_path) or not os.path.isdir(local_applications_path):
        return

    desktop_filename = os.path.join(local_applications_path, '{0}.desktop'.format(APP_ID))
    if not os.path.exists(desktop_filename) or not os.path.isfile(desktop_filename):
        return

    try:
        desktop_file_content = open(desktop_filename).read()
        start_idx = desktop_file_content.find('[Desktop Entry]')
        if start_idx != -1 and desktop_file_content.find('StartupWMClass') == -1:
            start_idx += len('[Desktop Entry]')
            updated_desktop_file_content = desktop_file_content[:start_idx] + '\nStartupWMClass={0}'.format(APP_ID) + desktop_file_content[start_idx:]
            open(desktop_filename, "w+").write(updated_desktop_file_content)
    except Exception, e:
        print 'Error while upgrading the desktop file: ', str(e)

if __name__ == "__main__":
    update_desktop_file_startupwmclass()
    
