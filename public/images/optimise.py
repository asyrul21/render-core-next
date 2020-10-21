import os

print("Hello World!")
print("This script will iterate through this folder and covert each image to webp and jp2 formats.")


# constant variables
CURRENT_DIRECTORY = os.getcwd()
IMAGE_EXTENSIONS = ['jpeg', 'jpg', 'png']
WEBP_QUALITY_THRESHOLD = 80
JP2_QUALITY_THRESHOLD = 70
EXCLUDE_DIRS = ['icons']


def getFileExtension(filename):
    return filename.split('.')[-1]


def getFilenameWithoutExtension(filename):
    return filename.split('.')[0]


def optimisedImagesAlreadyExist(filename, fileList):
    filename = getFilenameWithoutExtension(filename)
    webpImage = filename + '.webp'
    jp2Image = filename + '.jp2'

    if(webpImage in fileList and webpImage in fileList):
        print("Optimised image formats already exist!")
        return True

    return False


def composeWEBPCommandString(file):
    # cwebp -q 80 landing-coding.jpg -o landing-coding.webp
    return "cwebp -q " + str(WEBP_QUALITY_THRESHOLD) + " " + file + " -o " + getFilenameWithoutExtension(file) + ".webp"


def composeJP2CommandString(file):
    # magick convert -quality 80 rose.jpg rose.jp2
    return "magick convert -quality " + str(JP2_QUALITY_THRESHOLD) + " " + file + " " + getFilenameWithoutExtension(file) + ".jp2"


def executeConvert2WebP(file):
    command = composeWEBPCommandString(file)
    os.system(command)


def executeConvert2Jp2(file):
    command = composeJP2CommandString(file)
    os.system(command)


def getCurrentSubDir(directory):
    return directory.split('/')[-1]


for subdir, dirs, files in os.walk(CURRENT_DIRECTORY):
    for file in files:
        if(getFileExtension(file) in IMAGE_EXTENSIONS
                and getCurrentSubDir(subdir) not in EXCLUDE_DIRS):
            # print("subdir:", subdir)
            # print("dirs:", dirs)
            # print("file:", file)
            # print("Current subdir:", getCurrentSubDir(subdir))

            # change to directory
            os.chdir(subdir)

            if(not optimisedImagesAlreadyExist(file, files)):
                executeConvert2WebP(file)
                executeConvert2Jp2(file)


print("Image files optimised successfully.")
